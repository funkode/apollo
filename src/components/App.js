import React from 'react';

import { VOTERS_QUERY } from '../queries/voter/VotersQuery';
import { VoterTableContainer } from './voter/VoterTableContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ElectionManagement } from "./election-management/ElectionManagement";

import {VoterFormMutation} from '../mutations/voter/VoterFormMutation'

import {ElectionSelectionQuery} from '../queries/ElectionSelectionQuery';
import {LoginFormComponent} from './LoginFormComponent';
import {LoginMutation} from '../mutations/LoginMutation';
import {Switch } from "react-router-dom";
import {BallotVoteComponent} from './BallotVoteComponent';
import {SelectedBallotQuery} from '../queries/SelectedBallotQuery';
import {VoterRegisteredSubscription, VoterReplacedSubscription, VoterDeletedSubscription } from '../subscription';

import team from '../images/team.jpg'
export const App = () => (
  <React.Fragment>
  <Router>
  <div id="container" className="container">
        <div id="pageHeader" className="pageHeader"><h1>Winterland Election Commission</h1></div>
          <div id="leftColumn" className="leftColumn">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/voters">Voters</Link>
                <Route path="/voters" component={Voters} />
              </li>
              <li>
                <Link to="/manageElection">Manage Elections</Link>
              </li>
              <li>
                <Link to="/campaign/">Campaign</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
          <SwitchComponent />
        </div>
      </div>

  </Router>
  <VoterRegisteredSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  <VoterReplacedSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  <VoterDeletedSubscription refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>
);



const SwitchComponent = (history)=> {
  return<Switch>
    <div className="rightColumn">
      <Route exact path="/" component={Home} />
      <Route path="/voterlist" component={VotersList} />
      <Route path="/register" component={Register} />
      <Route path="/manageElection" component={ManageElection} />
      <Route exact path="/campaign/" component={ElectionSelectionQuery} />
      <Route path="/campaign/:ballotId/login" component={LoginMutation}/>
      <Route path="/campaign/:ballotId/:userId/VotePage" component={SelectedBallotQuery}/>
      <Route path="/about" component={About} />
    </div>
  </Switch>;
}


export const Home = () =>
  <React.Fragment>
    <div>
    <h3>Welcome to Election Commission of Winterland!</h3>
    <p>A political campaign is an organized effort which seeks to influence the decision
       making process within a specific group. In democracies, political campaigns often refer 
       to electoral campaigns, by which representatives are chosen or referendums are decided. 
       In modern politics, the most high-profile political campaigns are focused on general elections 
       and candidates for head of state or head of government, often a president or prime minister.
    </p>
    <h4>Campaign message</h4>
    <p>
    The message of the campaign contains the ideas that the candidate wants to share with the voters. 
    It is to get those who agree with their ideas to support them when running for a political position. 
    The message often consists of several talking points about policy issues. The points summarize 
    the main ideas of the campaign and are repeated frequently in order to create a lasting impression 
    with the voters. In many elections, the opposition party will try to get the candidate "off message" 
    by bringing up policy or personal questions that are not related to the talking points. 
    Most campaigns prefer to keep the message broad in order to attract the most potential voters. 
    A message that is too narrow can alienate voters or slow the candidate down with explaining details. 
    For example, in the 2008 American presidential election John McCain originally used a message that 
    ocused on his patriotism and political experience: "Country First"; later the message was changed to 
    shift attention to his role as "The Original Maverick" within the political establishment. 
    Barack Obama ran on a consistent, simple message of "change" throughout his campaign. However, even if
     the message is crafted carefully, it does not assure the candidate a victory at the polls. For a 
     winning candidate, the message is refined and then becomes his or her in office.
    </p>
    <h3>Modern technology and the internet</h3>
    <p>
    The internet is now a core element of modern political campaigns. Communication technologies such as e-mail, web sites, and podcasts for various forms of activism to enable faster communications by citizen movements and deliver a message to a large audience. These Internet technologies are used for cause-related fundraising, lobbying, volunteering, community building, and organizing. Individual political candidates are also using the internet to promote their election campaign. In a study of Norwegian election campaigns, politicians reported they used social media for marketing and for dialogue with voters. Facebook was the primary platform for marketing and Twitter was used for more continuous dialogue.[1]
Signifying the importance of internet political campaigning, Barack Obama's presidential campaign relied heavily on social media, Search Engine Optimisation (SEO) and new media channels to engage voters, recruit campaign volunteers, and raise campaign funds. The campaign brought the spotlight on the importance of using internet in new-age political campaigning by utilizing various forms of social media and new media (including Facebook, YouTube and a custom generated social engine) to reach new target populations. The campaign's social website, my.BarackObama.com, utilized a low cost and efficient method of mobilizing voters and increasing participation among various voter populations.[2] This new media was incredibly successful at reaching the younger population while helping all populations organize and promote action.
Now Online Election campaign has got a new dimension, the campaign information can be shared as in Rich Info format through campaign landing pages, integrating Google’s rich snippets, structured data,[3] Social media open graphs, and husting support file formats for YouTube like .sbv (SubRip), .srt (subtitle resource track), .vtt (Video text trace), high proficiency and effective algorithmic integration will be the core factor in the frame-work. This technology integration helps campaign information to reach a wide audience in split seconds. This has successfully been tested and implemented in 2015 Aruvikkara Election Kerala.[4]
    </p>
    </div>
  </React.Fragment>;

export const About = () =>
  <React.Fragment>
    <h3>The glorious team behind this awesome initiative is:</h3>
    <ul>
      <li>Dominic Frempong</li>
      <li>Pradeep Reddy</li>
      <li>Shelley Tong</li>
      <li>Todd Tang</li>
    </ul>
    <span>Under the guidance of <b>Eric W. Greene</b></span>
    <img className="teamPic" src={team} alt={"team"}/> 
  </React.Fragment>;

export const Voters = () =>
  <React.Fragment>
    <ul>
      <li>
        <Link to="/voterlist">Voters List</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
</React.Fragment>;

export const Register = () =>
  <React.Fragment>
    <h3>Be a Winterland supporter by voting for the local elections. Start making the difference by registering today.</h3>
   <VoterFormMutation refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const VotersList = () =>
  <React.Fragment>
    <h3>Registered voters from Winterland.</h3>
    <VoterTableContainer refetchQueries={[{ query: VOTERS_QUERY }]}/>
  </React.Fragment>;

export const ManageElection = () =>
  <React.Fragment>
   <ElectionManagement />
  </React.Fragment>;

export const Elections = () =>
  <React.Fragment>
  </React.Fragment>;
