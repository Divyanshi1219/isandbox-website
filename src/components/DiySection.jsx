import "./DiySection.css";

function DiySection() {
  return (
    <section className="diy-section">

      {/* Decorative Elements */}
      <div className="diy-star diy-star-one">✦</div>
      <div className="diy-star diy-star-two">✧</div>
      <div className="diy-sparkle">✦</div>

      <div className="diy-bulb">
        💡
      </div>

      <div className="diy-rocket">
        🚀
      </div>

      {/* Background Blobs */}
      <div className="diy-bg-shape diy-bg-shape-one"></div>
      <div className="diy-bg-shape diy-bg-shape-two"></div>


      {/* LEFT IMAGE */}

      <div className="diy-visual">

        <div className="diy-image-blob">

          <img
            src="/diy-kids.png"
            alt="Kids creating DIY crafts"
          />

        </div>

      </div>


      {/* RIGHT CONTENT */}

      <div className="diy-content">

        <span className="diy-small-heading">
          SPARK CURIOSITY
        </span>

        <h2>
          Little Hands,
          <br />

          <span className="word-create">
            BIG
          </span>{" "}

          <span className="word-imagination">
            IMAGINATION.
          </span>
        </h2>


        <p className="diy-intro">
          Give little creators the freedom to build, paint,
          experiment and explore with DIY kits made for
          curious minds.
        </p>


        {/* FEATURES */}

        <div className="diy-features">

          <div className="diy-feature">

            <div className="feature-circle">
              🧠
            </div>

            <div>
              <h3>Think & Explore</h3>

              <p>
                Creative activities that turn curiosity
                into discovery.
              </p>
            </div>

          </div>


          <div className="diy-feature">

            <div className="feature-circle">
              🎨
            </div>

            <div>
              <h3>Make Something Amazing</h3>

              <p>
                Every kit gives imagination a place
                to come alive.
              </p>
            </div>

          </div>


          <div className="diy-feature">

            <div className="feature-circle">
              ⭐
            </div>

            <div>
              <h3>Proudly Made by Them</h3>

              <p>
                Because creating it is just as exciting
                as the finished masterpiece.
              </p>
            </div>

          </div>

        </div>


        

      </div>

    </section>
  );
}

export default DiySection;