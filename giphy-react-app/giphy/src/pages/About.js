// import 'dotenv/config';
import { useEffect, useState } from 'react';
import axios from "axios";
import CardStrap from '../components/CardStrap';


function About() {
    
    return (
        <div className="container">
            <div className='row'> 
                <h1>About The Giphy App</h1>
            </div>
            <div className='row'>
                <CardStrap/>
            </div>
            <div className='row'>
                <p>
                I'm baby slow-carb skateboard 90's chartreuse, hammock try-hard palo santo man bun. Pabst bitters migas etsy praxis gentrify, quinoa lumbersexual vape sartorial succulents williamsburg photo booth meditation. Man bun beard taxidermy prism. Seitan health goth retro lyft selvage. Seitan flexitarian shoreditch, drinking vinegar gluten-free PBR&B palo santo pug everyday carry distillery fingerstache pok pok tattooed single-origin coffee. Lo-fi deep v lumbersexual marfa tousled vape small batch cliche skateboard swag copper mug fingerstache pickled venmo sartorial. Hell of intelligentsia glossier meditation franzen, put a bird on it authentic banjo lumbersexual neutra cardigan stumptown kogi.
Poutine YOLO man bun whatever la croix. Slow-carb yuccie messenger bag DIY stumptown kale chips edison bulb vape activated charcoal fam mustache flexitarian fixie tilde. Plaid gentrify pok pok, man braid edison bulb pabst trust fund. Pop-up cronut live-edge keytar kombucha, fingerstache palo santo brunch single-origin coffee vaporware gluten-free vegan DSA ramps normcore.
Austin shaman intelligentsia tofu, organic pour-over mustache air plant cronut letterpress. Tofu franzen poke intelligentsia kale chips you probably haven't heard of them ramps. Meh activated charcoal 8-bit, helvetica waistcoat unicorn tacos drinking vinegar fixie lyft gluten-free artisan lo-fi neutra godard. Pop-up authentic lo-fi mlkshk snackwave farm-to-table normcore palo santo pok pok sriracha. La croix hexagon pork belly, retro cray austin authentic typewriter tacos waistcoat pok pok lomo. Selvage ethical farm-to-table air plant slow-carb letterpress man bun four loko vinyl twee. Whatever listicle iceland quinoa hot chicken hella, kickstarter ennui biodiesel YOLO ugh thundercats viral subway tile.
Selfies vegan literally skateboard irony DSA waistcoat tattooed godard. 3 wolf moon mixtape echo park locavore. Four loko kinfolk af bitters, letterpress sriracha you probably haven't heard of them neutra mlkshk stumptown listicle actually vice chia. Helvetica roof party artisan, bushwick enamel pin hell of cloud bread. Disrupt scenester microdosing, snackwave slow-carb lomo leggings salvia woke live-edge meditation 90's narwhal. Vinyl synth palo santo disrupt, edison bulb succulents prism.
Hella artisan bespoke distillery roof party authentic tumeric tote bag cornhole try-hard lyft YOLO synth banh mi. Live-edge ramps truffaut, woke etsy austin iceland vape sriracha helvetica gochujang. Cred mumblecore +1 kitsch brooklyn, meggings skateboard wolf drinking vinegar raclette pour-over church-key sriracha cliche. Offal occupy pork belly vice DIY readymade woke shoreditch fashion axe food truck pinterest forage 3 wolf moon. Four loko roof party +1 twee schlitz subway tile meh cloud bread affogato.
                </p>
            </div>
        </div>
    )
}


export default About;