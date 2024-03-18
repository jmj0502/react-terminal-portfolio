import Shell from './components/Shell';
import History from './components/History';

function App() {
  return (
    <main style={{'fontFamily': 'droid_sans_monoregular'}} id='main' className="h-[100vh] w-[100vw] !bg-background">
      <History />
      <Shell />
    </main>
  )
}

export default App
