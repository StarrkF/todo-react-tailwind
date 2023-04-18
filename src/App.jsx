import ThemeSwitcher from './components/ThemeSwitcher';
import Todo from './pages/Todo';

function App() {
  return (
    <div>
      <div className="mt-4 flex justify-end">
        <ThemeSwitcher />
      </div>
      <div className="mt-20">
        <Todo />
      </div>
    </div>
  )
}

export default App
