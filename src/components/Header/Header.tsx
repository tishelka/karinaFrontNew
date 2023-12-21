import "./Header.scss";

type HeaderProps = {
  onSearch: (query: string) => void;
};

export const Header = ({ onSearch }: HeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="headerWrapper">
      <h1>Калорийк</h1>
      <input
        className="headerInput"
        placeholder="Найти продукт..."
        onChange={handleSearch}
      />
    </div>
  );
};
