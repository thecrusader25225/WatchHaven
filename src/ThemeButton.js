import "./ThemeButton.css";
export default function ThemeButton({ isDarkMode, setIsDarkMode }) {
  return (
    <label class="ui-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onClick={() => setIsDarkMode((prev) => !prev)}
      />
      <div class="slider">
        <div class="circle" />
      </div>
    </label>
  );
}
