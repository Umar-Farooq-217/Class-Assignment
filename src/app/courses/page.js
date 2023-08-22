import Header from '../(component)/header/header'
import FirstCard from '../(component)/firstCard/firstCard'
import SecondCard from '../(component)/secondCard/secondCard'
export default function Home() {
    return (
    <div>
      <Header title='Our Courses'/>

      <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
           <FirstCard title='Ungraduate Programs'/>
           <FirstCard title='Graduate Programs'/>
           <FirstCard title='Adult Learning & Degree Completion'/>
           
           
        </div>
    </section>


    <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
           <SecondCard title='Web Development' src='/img/course1.png' pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />
           <SecondCard title='Artificial Science' src="/img/course2.png" pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />
           <SecondCard title='Data Science' src='/img/course3.png' pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.' />

        </div>
    </section>
    </div>
    )
  }