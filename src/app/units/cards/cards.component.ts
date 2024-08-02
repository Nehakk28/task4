 import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
    {
      id:1,
      Title:"AEROSPACE & DEFENCE",
      Image:"../../../assets/aerospace.jpeg",
      description:"Pushing boundaries & defending horizons with cutting-edge technologies"

    },

{
    id:2,
      Title:"BANKING & FINANCIAL SERVICES",
      Image:"../../../assets/banking.jpeg",
      description:"Accelerating the cashless economy efficiently by adopting global standards and local priorities "

    },
    {
      id:3,
        Title:"HEALTHCARE",
        Image:"../../../assets/health.jpeg",
        description:"Promoting digital innovation & excellence in the healthcare industry"
  
      },
      {
        id:2,
          Title:"CYBER SERCURITY",
          Image:"../../../assets/cyber.jpeg",
          description:"Secure your digital frontiers with cutting-edge Cyber Security"
    
        },
        {
          id:2,
            Title:"LOCOMOTIVE",
            Image:"../../../assets/locomotive.jpeg",
            description:"Elevating Locomotive Experiences through Innovative Technologies"
      
          },
          {
            id:2,
              Title:"INSURANCE",
              Image:"../../../assets/insurance.jpeg",
              description:"Unlocking the potential of insurance through technology"
        
            },
            {
              id:2,
                Title:"INDUSTRIAL",
                Image:"../../../assets/industrial.jpeg",
                description:"Where Power Meets Production: Redefining Manufacturing & Energy"
          
              },
              {
                id:2,
                  Title:"MOBILITY",
                  Image:"../../../assets/mobility.jpeg",
                  description:"We are Revolutionizing the world of Mobility"
            
                },
]
}
