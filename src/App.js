import {ProfileCard} from "./ProfileCard"
import alexa from "./images/alexa.png"
import cortana from "./images/cortana.png"
import siri from "./images/siri.png"

export const App = () =>{
 return (


    <div className="container">
    <section className="section">
      <div className="columns">
        <div className="column is-4">
          <ProfileCard
            title="Alexa"
            handle="@alexa99"
            image={alexa}
            description="Alexa was created by Amazon and helps you buy things."
          />
        </div>
        <div className="column is-4">
          <ProfileCard
            title="Cortana"
            handle="@cortana32"
            image={cortana}
            description="Cortana was made by Microsoft. Who knows what it does?"
          />
        </div>
        <div className="column is-4">
          <ProfileCard
            title="Siri"
            handle="@siri01"
            image={siri}
            description="Siri was made by Apple and is being phased out"
          />
        </div>
      </div>
    </section>
  </div>

 )
}


