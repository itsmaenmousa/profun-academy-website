import { news } from './news'
import { listTypes } from './lists'
import { pageTypes } from './pages'
export const schemaTypes = [news, ...listTypes, ...pageTypes]
