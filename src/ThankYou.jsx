export default function ThankYou({ darkMode }) {
  return (
    <section className="mt-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Thank You</h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        Thank you for visiting my personal website. I hope you enjoyed exploring
        my digital living room!
      </p>
    </section>
  );
}
