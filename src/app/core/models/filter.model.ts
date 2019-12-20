/**
 * Интерфейс, описывающий набор фильтров таблицы генов
 */
export interface IFilter {
  name: boolean;        // Название гена
  ageMya: boolean;      // Происхождение, возраст
  cluster: number[];    // Функциональный класс
  expression: string;   // Возрастные изменения экспрессии
}
