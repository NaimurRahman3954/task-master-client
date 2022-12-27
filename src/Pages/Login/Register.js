import React from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/Usercontext'
import app from '../../Firebase/firebase.init'

const auth = getAuth(app)

const Register = () => {
  const [passwordError, setPasswordError] = useState('')
  const [success, setSuccess] = useState(false)
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const { createUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()
    setSuccess(false)

    const form = event.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const role = form.role.value
    const password = form.password.value

    setPasswordError('')

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setSuccess(true)
        form.reset()
        updateUser(name, photoURL)
        // 🛑🛑
        saveUser(name, email, role)
      })
      .catch((error) => {
        setPasswordError(error.message)
      })
  }

  const updateUser = (name, URL) => {
    updateProfile(auth.currentUser, {
      photoURL: URL,
      displayName: name,
    })
      .then(() => {
        console.log('photoURL updated')
      })
      .catch((error) => console.error(error))
  }

  const saveUser = (name, email, role, photoURL) => {
    const user = { name, email, role, photoURL, verified: false }
    console.log(user)
    fetch('https://assignment-12-server-sage.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email)
        navigate('/')
      })
  }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen sm:justify-center sm:pt-0 lg:flex-row gap-16">
        <img
          src="https://i.ibb.co/HTpLrWR/Sign-up-pana.png"
          className="max-w-lg hidden lg:block"
          alt=""
        />
        <div className="px-9 py-4 overflow-hidden max-w-lg sm:rounded-lg mb-12">
          <h1 className="text-4xl font-bold mb-9">Register your account 🖊️</h1>
          <form onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 undefined"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  required
                  className="block w-full mt-1 p-1 px-3 rounded-md input input-bordered focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600 undefined"
              >
                Photo URL
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="url"
                  name="photoURL"
                  placeholder="photo URL"
                  defaultValue="https://i.ibb.co/qd40KmP/avatardefault-92824.webp"
                  // required
                  className="block w-full mt-1 p-1 px-3 rounded-md input input-bordered focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 undefined"
              >
                Role
              </label>
              <div className="flex flex-col items-start">
                <select
                  name="role"
                  id=""
                  className="block w-full mt-1 p-1 px-1 rounded-md input input-bordered focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option defaultValue="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="block w-full mt-1 p-1 px-3 rounded-md input input-bordered focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  placeholder="your password"
                  required
                  className="block w-full mt-1 p-1 px-3 rounded-md input input-bordered focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <Link href="#" className="text-xs text-primary hover:underline">
              Forget Password?
            </Link>
            <p className="text-danger my-2 text-secondary">{passwordError}</p>
            {success && (
              <p className="text-success">User created successfully!</p>
            )}
            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          <div className="my-4 text-gray-400">
            Already have an account?{' '}
            <span>
              <Link className="text-primary hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
