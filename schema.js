const fetch = require('node-fetch')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

// this is the root url for stats.nba.com
let rootURL = 'http://stats.nba.com'

// these headers are required to make requests to stats.nba.com
let headers = {
  'user-agent': ('Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'),
  'Dnt': ('1'),
  'Accept-Encoding': ('gzip, deflate, sdch'),
  'Accept-Language': ('en'),
  'origin': ('http://stats.nba.com')
}

const TeamType = new GraphQLObjectType({
  name: 'Team',
  description: '...',

  fields: () => ({
    season: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][1]
    },
    city: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][2]
    },
    name: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][3]
    },
    shortName: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][4]
    },
    conference: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][5]
    },
    division: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][6]
    },
    wins: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][8]
    },
    loses: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][9]
    },
    winPercentage: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[0].rowSet[0][10]
    },
    confRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][11]
    },
    divRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[0].rowSet[0][12]
    },
    minYear: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][13]
    },
    maxYear: {
      type: GraphQLString,
      resolve: json =>
      json.resultSets[0].rowSet[0][14]
    },
    ptsRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][3]
    },
    ptsPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][4]
    },
    rebRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][5]
    },
    rebPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][6]
    },
    astRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][7]
    },
    astPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][8]
    },
    oppPointsRank: {
      type: GraphQLInt,
      resolve: json =>
      json.resultSets[1].rowSet[0][9]
    },
    oppPointsPerGame: {
      type: GraphQLFloat,
      resolve: json =>
      json.resultSets[1].rowSet[0][10]
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      team: {
        type: TeamType,
        args: {
          id: { type: GraphQLInt },
          season: { type: GraphQLString },
          seasonType: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          `${rootURL}/stats/teaminfocommon?leagueid=00&teamid=${args.id}&season=${args.season}&seasonType=${args.seasonType}`, {headers: headers}
        ).then(response => response.json())
      }
    })
  })
})

// http://stats.nba.com/stats/teaminfocommon?teamid=1610612757&leagueid=00&seasonType=Regular Season&season=2017-18

// const x = fetch(
//   'http://stats.nba.com/stats/teaminfocommon?teamid=1610612757&leagueid=00&seasonType=Regular Season&season=2017-18', {headers: headers}
// )
// .then(response => response.json())
// .then(response => response.resultSets[1].rowSet[0][0])

// x
