// "Seren Liu", "CIT 594" => "Teams-Seren-CIT594"
const concatChannelName = (name, course) => {
  return ["# Teams", name.replace(/ /g, ""), course.replace(/ /g, "")].join('-');
}

// "Seren Liu", "Ruichen Zhang" => "@Seren Liu @Ruchen Zhang"
const concatMemberName = (name, member) => {
  let atSign = '@';
  name = atSign.concat('', name);
  for (let user of member) {
    user = atSign.concat("", user);
    name = name.concat(" ", user);
  }
  return name;
}

module.exports = {
  concatChannelName: concatChannelName,
  concatMemberName: concatMemberName,
};