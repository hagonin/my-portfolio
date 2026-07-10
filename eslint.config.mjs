import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

// Next 16 removed `next lint`; lint runs via the ESLint CLI with flat config.
const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Advisory perf guidance (synchronous matchMedia / localStorage init here),
      // not a correctness issue — keep visible as a warning rather than an error.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
