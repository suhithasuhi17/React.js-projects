import './App.css'

function App() {
  return (
    <div class="signup-container">
    <h2>Create an Account</h2>
    <form>
        <div class="input">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div class="input">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div class="input">
            <label for="password">Password</label>
            <input type="password"   placeholder="Create a password"/> 
        </div>
        <div class="input">
            <label >Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Sign Up</button>
        <div class="login">
            Already have an account? <a href="#">Log In</a>
        </div>
    </form>
</div>
  )
}

export default App
