import React from 'react';

import { accountService } from '@/_services';
import ExerciseCard from '../Components/ExerciseCard';
import HeroCard from "../Components/HeroCard";

function Home() {
    const user = accountService.userValue;
    
    return (
      <div className="p-4">
        <div className="container">
          <h1>Hi {user.firstName}!</h1>
          <HeroCard />
        </div>
      </div>
    );
}

export { Home };