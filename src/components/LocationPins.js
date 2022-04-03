import React from 'react'

export default class LocationPins extends React.Component {

  state = {
    associates: [
      { name: 'Chuck', zip: '30101', lat: '34.034515', long: '-84.707349' },
      { name: 'Zoya', zip: '30024', lat: '34.062971', long: '-84.090770' },
      {
        name: 'Linmei',
        zip: '48187',
        lat: '42.325573',
        long: '-83.483576'
      },
      { name: 'Josh', zip: '97702', lat: '44.000626', long: '-121.233812' },
      {
        name: 'Roodlande',
        zip: '30127',
        lat: '33.874556',
        long: '-84.694713'
      },
      {
        name: 'Roderick',
        zip: '36117',
        lat: '32.378728',
        long: '-86.145011'
      },
      { name: 'Suman', zip: '30080', lat: '33.869940', long: '-84.498081' },
      { name: 'Joel', zip: '30066', lat: '34.032388', long: '-84.505154' }
      ]
    }

  samplePlot = () => {
    const map = L.map('map').setView([33, -70], 1);
    
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(map);

      let pos = {
        lat: -32,
        long: 1232
      }
      console.log(pos)
  }

  plotAssociate = () => {
    const map = L.map('map').setView([30, -75], 3);
    const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(map);

    const coords = [
      { name: 'Ed', lat: '34.034515', long: '-84.707349'  },
      { name: 'Zoya', lat: '34.062971', long: '-84.090770'  },
      { name: 'Linmei', lat: '42.325573', long: '-83.483576'  },
      { name: 'Josh', lat: '44.000626', long: '-121.233812' },
      { name: 'Roodlande', lat: '33.874556', long: '-84.694713'  },
      { name: 'Roderick', lat: '32.378728', long: '-86.145011'  },
      { name: 'Suman', lat: '33.869940', long: '-84.498081'  },
      { name: 'Joel', lat: '34.032388', long: '-84.505154'  }
    ]

    coords.map(c => L.marker([c.lat, c.long], { title: c.name }).addTo(map))

  }

  

  render() {
    return (
      <div>
        <h1>Location Pins</h1>
        {this.plotAssociate()}
        
      </div>
    )
  }
}