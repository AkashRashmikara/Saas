const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html")),
    res.sendFile(path.join(__dirname, "contact.html")),
    res.sendFile(path.join(__dirname, "about.html"));
    res.sendFile(path.join(__dirname, "temp1.html"));
});

app.get("/app.js", function (req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "app.js"));
});

app.get("/api/page", function (req, res) {
  const pageData = {
    title: "CareerVita",
    contacttitle: "Careervita-contact",
    description:
      "Your CV is not just a document, it's a reflection of your journey, skills, and aspirations.",
    vision:
      "Our vision is to empower individuals in crafting their professional narratives through innovative CV creation tools and personalized guidance, enabling them to unlock new opportunities and achieve their career aspirations with confidence and success.",
    mission:
      "Empowering individuals to create impactful CVs, unlocking career opportunities with confidence and professionalism.",
    explore:
      "Explore a world of possibilities and elevate your career prospects with our innovative CV creation platform.",
    about:
      "We are a dedicated team passionate about helping individuals create professional CVs, providing innovative tools and expert guidance for career success.",
    aboutdes:
      "Our website epitomizes the epitome of excellence in the domain of curriculum vitae (CV) creation. Leveraging our vast repertoire of meticulously curated templates and bespoke design options, we offer a superlative user experience. Whether you gravitate towards a traditional format or desire an avant-garde aesthetic, our platform empowers you to fashion exquisitely crafted CVs that epitomize your erudition and dexterity. Imbue your professional profile with a veneer of distinction by harnessing our comprehensive suite of CV composition tools, thereby unlocking a pantheon of unparalleled career prospects.",
    auther: "Career Vita",
    abouttitle: "CareerVita-About",
  };
  res.json(pageData);
});
const port = process.env.PORT || 5500; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
