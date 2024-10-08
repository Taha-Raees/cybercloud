import Image from "next/image";

const About = () => {
  return (
    <section className="bg-primary text-white min-h-screen py-16 px-8 md:px-24 bg-cover bg-center" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/bg.jpg')`
      }}>
      {/* About Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-8 text-accent">
          About <span className="text-neonYellow">CyberCloud</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed px-10">
          Welcome to <span className="text-neonYellow">CyberCloud</span>, the future of gaming. We believe in a world where gaming is accessible to everyone, anywhere, at any time. With cutting-edge cloud technology, you no longer need high-end devices to enjoy the best games.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mt-16 py-20">
        <h2 className="text-4xl font-bold text-center text-accent">Our Mission</h2>
        <p className="text-lg text-gray-400 mt-12 text-center max-w-3xl mx-auto leading-relaxed px-10">
          Our mission is to revolutionize gaming by eliminating the hardware barrier. We provide gamers worldwide with seamless access to high-quality gaming experiences, powered by the cloud. Whether you&apos;re at home, on the go, or anywhere in between, you can immerse yourself in the best games without ever needing to download or update.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 py-10 px-20">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Ultra-Low Latency",
              description: "Experience smooth, responsive gameplay with minimal lag, thanks to our state-of-the-art servers.",
            },
            {
              title: "Cross-Platform Support",
              description: "Play on any device — from PCs to mobile phones, tablets, and even smart TVs.",
            },
            {
              title: "Exclusive Game Library",
              description: "Access a vast, ever-growing library of exclusive titles, available only on CyberCloud.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#222] to-primary p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-neonYellow"
            >
              <h3 className="text-2xl font-semibold text-neonYellow">{item.title}</h3>
              <p className="text-gray-300 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-16 py-10 px-20">
        <h2 className="text-4xl font-bold text-center text-accent mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex Johnson", role: "CEO & Founder" },
            { name: "Samantha Lee", role: "CTO & Co-Founder" },
            { name: "Michael Green", role: "Lead Developer" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/avatar.svg"
                alt="Team member avatar"
                width={150}
                height={150}
                className="mx-auto w-24 h-24 rounded-full mb-4 border-2 border-neonYellow"
              />
              <h3 className="text-2xl font-semibold text-neonYellow">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-16 py-28 border-b-4 border-neonYellow">
        <h2 className="text-4xl font-bold text-center text-accent mb-6">Contact Us</h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          Interested in joining us on this exciting journey? Get in touch with us via email or follow us on social media.
        </p>
        <div className="flex justify-center mt-8">
          <a href="mailto:info@cybercloud.com" className="text-neonYellow hover:text-accent">
            info@cybercloud.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
