import React from 'react';
import SingingButton from './SingingButton'
import Border from './Border'

const App = () => (
  
   <Border> 
     <SingingButton 
     label={'Przycisk1'}
     sound={'la la la'}
     />
     <SingingButton 
     label={'Przycisk2'}
     sound={'Kotki dwa !'}
     />

  </Border>
  
)

export default App
