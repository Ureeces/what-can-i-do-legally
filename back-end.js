function whatCanIDoLegally(age) {
    if(age < 18) {
        return "Ya can't drink or drive mate.";
    }

    else if(age < 21) {
        return "You can drive mate, but drinking y'hear?";
    }

    else {
        return "You're allowed to drink and drive mate, just don't do it at the same time.";
    }
}

module.exports = whatCanIDoLegally;