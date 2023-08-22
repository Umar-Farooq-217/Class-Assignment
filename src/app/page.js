import Link from 'next/link'
import FirstCard from './(component)/firstCard/firstCard'
import SecondCard from './(component)/secondCard/secondCard'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <section class="header">
        <nav>
          <Link href="/" class="logo">Xplore
            <i class="fab fa-staylinked"></i>kill
          </Link>
          <div class="nav-links" id="navLinks">

            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Course</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <i class="fa fa-bars" onclick="showMenu()"></i>

        </nav>

        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" class="hero_btn">Visit Us To Know More</a>
        </div>
      </section>

      <section class="course">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <FirstCard title='Ungraduate Programs' />
          <FirstCard title='Graduate Programs' />
          <FirstCard title='Adult Learning & Degree Completion' />


        </div>
      </section>


      <section class="campus">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <div class="campus-col">
            <Image src="/img/Campus1.png" width='100' height='100' alt="" />
            <div class="layer">
              <h3>DELHI</h3>
            </div>
          </div>
          <div class="campus-col">
            <Image src="/img/Campus2.png" width='100' height='100' alt="" />
            <div class="layer">
              <h3>HYDERABAD</h3>
            </div>
          </div>
          <div class="campus-col">
            <Image src="/img/Campus3.png" width='100' height='100' alt="" />
            <div class="layer">
              <h3>MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>


      <section class="facilities">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <SecondCard title='Best Library' src="/img/libary.png" pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />
          <SecondCard title='Athletics' src="/img/playground.png" pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />
          <SecondCard title='Tasty ans Healthy Food' src="/img/food.png" pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />
        </div>
      </section>


      <section class="testimonials">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <div class="testimonials-col">
            <Image width='100' height='100' src="/img/user.png" alt="oo.." />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.</p>
              <h3>Student Name</h3>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
          <div class="testimonials-col">
            <Image width='100' height='100' src="/img/user.png" alt="oo.." />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.</p>
              <h3>Student Name</h3>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>

      <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
      </section>


    </div>
  )
}
