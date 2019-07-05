# _NBA Stats GraphQL_

##### _GraphQL wrapper around NBA stats API, November 5, 2017_

#### By _**Jeff Austin**_

## Description

_This is the beggining of a wrapper around the NBA stats API. Currently only has a team query._

## Setup

* _Clone this repo onto your desktop_
* _Navigate to the root directory of clone_
* _For Yarn_
* _Run:_
```
$ yarn
```
* _For NPM_
* _Run:_
```
$ npm install
```
* _Then run:_
```
$ node server.js
```
* _Visit localhost:4000/graphql in your browser_
* _Here is a sample query (this will return all available fields):_
```
{
  team(id: 1610612757, season: "2017-18", seasonType: "Regular Season")
}
```
* _season takes the format YYYY-YY, seasonType includes: 'Regular Season', 'Pre Season', 'Playoffs', 'All Star'_
* _Here is a list of ids for teams:_
* _'1610612738' - Celtics_
* _'1610612751' - Nets_
* _'1610612752' - Knicks_
* _'1610612755' - Sixers_
* _'1610612761' - Raptors_
* _'1610612741' - Bulls_
* _'1610612739' - Cavaliers_
* _'1610612765' - Pistons_
* _'1610612754' - Pacers_
* _'1610612749' - Bucks_
* _'1610612737' - Hawks_
* _'1610612766' - Hornets_
* _'1610612748' - Heat_
* _'1610612753' - Magic_
* _'1610612764' - Wizards_
* _'1610612743' - Nuggets_
* _'1610612750' - Timberwolves_
* _'1610612760' - Thunder_
* _'1610612757' - Trail Blazers_
* _'1610612762' - Jazz_
* _'1610612744' - Warriors_
* _'1610612746' - Clippers_
* _'1610612747' - Lakers_
* _'1610612756' - Suns_
* _'1610612758' - Kings_
* _'1610612742' - Mavericks_
* _'1610612745' - Rockets_
* _'1610612763' - Grizzlies_
* _'1610612740' - Pelicans_
* _'1610612759' - Spurs_
* _Enjoy!_

## Technologies Used

_Node, Express, Express-GraphQL, GraphQL_

### Legal

Copyright (c) 2017 - present **_Jeff Austin_**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
