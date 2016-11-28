onlyBind = /^\{\{[^\{^\}]+\}\}$/
mixedBind = /\{\{.+?\}\}/g
bindL = /\{\{/g
bindR = /\}\}/g

clearBindLR = (str)-> str.replace(bindL, "").replace(bindR, "")

convertOnly = (data)-> "{#{clearBindLR data}}"

convertMixed = (data)->
    binds = data.match mixedBind
    noBinds = data.split mixedBind
    ret = []
    for item in noBinds
        bd = binds.shift()
        ret.push "'#{item}'#{if bd then "+(#{clearBindLR bd})"  else ''}"
    "{#{ret.join '+'}}"

module.exports = (data)->
    if onlyBind.test data
        convertOnly data
    else if mixedBind.test data
        convertMixed data
    