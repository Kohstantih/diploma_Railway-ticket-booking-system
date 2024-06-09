import './CitiesList.css';

export default function CitiesList({
  list = [
    'Ангарск',
    'Архангельск',
    'Астрахань',
    'Барнаул',
    'Белгород',
    'Благовещенск',
    'Братск',
    'Брянск',
    'Великий Новгород',
  ],
  selectCity,
}) {
  return (
    <ul className="cities-list">
      {list.map((item, index) => {
        return (
          <li
          onClick={() => selectCity(item)}
          key={index} className="cities-list__item">
            {item}
          </li>
        );
      })}
    </ul>
  );
}
