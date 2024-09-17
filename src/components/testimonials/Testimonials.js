import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://img.freepik.com/premium-vector/cute-robot-icon-illustration-techology-robot-icon-concept-isolated-flat-cartoon-style_138676-1219.jpg",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      featured: true,
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://i.pinimg.com/474x/c9/0b/7d/c90b7d51b99a120db93c494d675a0e8b.jpg",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://i.pinimg.com/originals/b6/1f/6c/b61f6c2320502a9efcc1970702d35d82.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="imgCareer/right-arrow.png" className="left" alt="" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
