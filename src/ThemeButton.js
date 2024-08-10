import "./ThemeButton.css";
export default function ThemeButton({ isDarkMode, setIsDarkMode }) {
  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode((prev) => !prev)}
      />
      <div className="slider">
        <div className="circle" />
      </div>
    </label>
  );
}
