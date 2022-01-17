// "Seren Liu", "CIT 594" => "CITeams-Seren-CIT594"
const concatChannelName = (name, course) => {
  return ["Channel Name: citeams", name.toLowerCase().replace(/ /g, ""), course.toLowerCase().replace(/ /g, "")].join('-');
}

// "Seren Liu", "Ruichen Zhang" => "Seren Liu Ruchen Zhang"
const concatMemberName = (name, member) => {
  for (let user of member) {
    name = name.concat(" ", user);
  }
  return name;
}

module.exports = {
  concatChannelName: concatChannelName,
  concatMemberName: concatMemberName,
};