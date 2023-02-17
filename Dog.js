
import { dogs } from '/data.js'

const card = document.getElementById("card")
const noMoreLikes = document.getElementById("no-more-likes")

class Dog {
    constructor(data) {
        Object.assign(this, data) 
    }
    
    generateProfile() {
        const { name, avatar, age, bio } = this;
                return `
                <div class="dog-photo" id="dog-photo">
                    <img src="${avatar}" alt="no-img-available" class="photo"></img>
                </div>
                <div class="profile" id="profile">
                    <h3>${name}, ${age}</h3>
                    <h5>${bio}</h5>
                </div>
            
            `
    } 

}


export default Dog






