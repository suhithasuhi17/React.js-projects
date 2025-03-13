import './App.css'

function App() {
  

  return (
    <div className="dashboard-container">
     
      <div className="sidebar">
        <h2>My Dashboard</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      <main className="main">
        <h1>Welcome, User!</h1>
        <p>Here's a quick overview of your activity.</p>
      </main>
    </div>
  )
}

export default App
