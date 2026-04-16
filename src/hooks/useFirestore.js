import { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Fetch translations for a specific section from Firestore
 * Falls back to static JSON if Firebase fails
 */
export function useTranslations(section) {
  const { locale } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTranslations() {
      setLoading(true);
      try {
        const docRef = doc(db, 'translations', 'content');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const content = docSnap.data()[section];
          setData(content?.[locale] || content?.fr || null);
        } else {
          setData(null);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching translations:', err);
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchTranslations();
  }, [section, locale]);

  return { data, loading, error };
}

/**
 * Fetch all projects from Firestore
 */
export function useProjects() {
  const { locale } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Get localized content
            title: data.title?.[locale] || data.title?.fr || data.title,
            description: data.description?.[locale] || data.description?.fr || data.description,
            problem: data.problem?.[locale] || data.problem?.fr || data.problem,
            solution: data.solution?.[locale] || data.solution?.fr || data.solution,
            results: data.results?.[locale] || data.results?.fr || data.results,
          };
        });
        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [locale]);

  return { projects, loading, error };
}
