import { Link } from 'react-router-dom';
import bgImage from '../assets/about-bg.jpg';

function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Delicious food background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* White overlay without blur */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center space-y-10">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-red-600 drop-shadow-lg">Welcome to FoodZone</h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
            Discover your favorite meals, order in seconds, and enjoy fast, fresh, and affordable food delivered to your doorstep.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {[
            {
              icon: '🍔',
              title: 'Wide Variety',
              desc: 'Explore a diverse menu with Indian delicacies, juicy burgers, cheesy pizzas, and more — curated to satisfy all your cravings.',
            },
            {
              icon: '⚡',
              title: 'Lightning-Fast Delivery',
              desc: 'No more waiting! Our reliable partners ensure your food arrives hot and fresh in no time.',
            },
            {
              icon: '💰',
              title: 'Pocket-Friendly Meals',
              desc: 'Enjoy premium quality meals at prices you’ll love. Great taste doesn’t have to be expensive.',
            },
            {
              icon: '🔒',
              title: 'Secure & Simple Login',
              desc: 'Log in or sign up effortlessly to manage your orders, view history, and get personalized recommendations.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-red-500 mb-2">{item.icon} {item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
          <Link
            to="/login"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-100 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
