import { LRLanguage, indentNodeProp, continuedIndent, foldNodeProp, foldInside, LanguageSupport } from "./@codemirror-language.js";
import { defineCSSCompletionSource } from "./@codemirror-lang-css.js";
import { ExternalTokenizer, LRParser } from "./@lezer-lr.js";
import { styleTags, tags } from "./@lezer-highlight.js";

// This file was generated by lezer-generator. You probably shouldn't edit it.
const descendantOp = 109,
  Unit = 1,
  openArgList = 2;

const space = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
    8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288];
function isAlpha(ch) { return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 161; }
function isDigit(ch) { return ch >= 48 && ch <= 57; }
const argList = /*@__PURE__*/new ExternalTokenizer((input, stack) => {
    if (input.next == 40 /* Ch.parenL */) {
        let prev = input.peek(-1);
        if (isAlpha(prev) || isDigit(prev) || prev == 95 /* Ch.underscore */ || prev == 45 /* Ch.dash */)
            input.acceptToken(openArgList, 1);
    }
});
const descendant = /*@__PURE__*/new ExternalTokenizer(input => {
    if (space.indexOf(input.peek(-1)) > -1) {
        let { next } = input;
        if (isAlpha(next) || next == 95 /* Ch.underscore */ || next == 35 /* Ch.hash */ || next == 46 /* Ch.period */ ||
            next == 91 /* Ch.bracketL */ || next == 58 /* Ch.colon */ || next == 45 /* Ch.dash */)
            input.acceptToken(descendantOp);
    }
});
const unitToken = /*@__PURE__*/new ExternalTokenizer(input => {
    if (space.indexOf(input.peek(-1)) < 0) {
        let { next } = input;
        if (next == 37 /* Ch.percent */) {
            input.advance();
            input.acceptToken(Unit);
        }
        if (isAlpha(next)) {
            do {
                input.advance();
            } while (isAlpha(input.next));
            input.acceptToken(Unit);
        }
    }
});

const lessHighlighting = /*@__PURE__*/styleTags({
    "import charset namespace keyframes media supports": tags.definitionKeyword,
    "from to selector": tags.keyword,
    NamespaceName: tags.namespace,
    KeyframeName: tags.labelName,
    TagName: tags.tagName,
    ClassName: tags.className,
    PseudoClassName: /*@__PURE__*/tags.constant(tags.className),
    IdName: tags.labelName,
    "FeatureName PropertyName PropertyVariable": tags.propertyName,
    AttributeName: tags.attributeName,
    NumberLiteral: tags.number,
    KeywordQuery: tags.keyword,
    UnaryQueryOp: tags.operatorKeyword,
    "CallTag ValueName": tags.atom,
    VariableName: tags.variableName,
    "AtKeyword Interpolation": /*@__PURE__*/tags.special(tags.variableName),
    Callee: tags.operatorKeyword,
    Unit: tags.unit,
    "UniversalSelector NestingSelector": tags.definitionOperator,
    MatchOp: tags.compareOperator,
    "ChildOp SiblingOp, LogicOp": tags.logicOperator,
    BinOp: tags.arithmeticOperator,
    Important: tags.modifier,
    "Comment LineComment": tags.blockComment,
    ColorLiteral: tags.color,
    "ParenthesizedContent StringLiteral": tags.string,
    Escape: /*@__PURE__*/tags.special(tags.string),
    ": ...": tags.punctuation,
    "PseudoOp #": tags.derefOperator,
    "; ,": tags.separator,
    "( )": tags.paren,
    "[ ]": tags.squareBracket,
    "{ }": tags.brace
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {__proto__:null,lang:40, "nth-child":40, "nth-last-child":40, "nth-of-type":40, "nth-last-of-type":40, dir:40, "host-context":40, and:242, or:242, not:80, only:80, url:92, "url-prefix":92, domain:92, regexp:92, when:123, selector:142, from:172, to:174};
const spec_AtKeyword = {__proto__:null,"@import":126, "@plugin":126, "@media":152, "@charset":156, "@namespace":160, "@keyframes":166, "@supports":178};
const parser = /*@__PURE__*/LRParser.deserialize({
  version: 14,
  states: "ArO!gQWOOO!nQaO'#CeOOQP'#Cd'#CdO$RQWO'#CgO%RQaO'#E`O%cQWO'#CiO%kQWO'#D^O%pQWO'#DaO%uQaO'#DiOOQP'#Er'#ErO'YQWO'#DlO'yQWO'#DyO(QQWO'#D{O({QWO'#D}O)WQWO'#EQO'bQWO'#EWOOQO'#Eq'#EqOOQO'#Eb'#EbO)]QWO'#EpO)gQ`O'#EYO)uQ`O'#EYO*QQ`O'#EaOOQO'#FR'#FRO*`QWO'#EpQOQWOOOOQP'#Ch'#ChOOQP,59R,59RO$RQWO,59RO*kQWO'#EcO+YQWO,58|O+hQWO'#DPO+oQWO,59TO%kQWO,59xO%pQWO,59{O*kQWO,5:OO*kQWO,5:QOOQO'#Dh'#DhO*kQWO,5:RO,uQpO'#E|OOQO,58|,58|O(QQWO,58|O,|QWO,5:zOOQO,5:z,5:zOOQT'#Cl'#ClO-bQeO,59TO.oQ[O,59TOOQP'#D`'#D`OOQP,59x,59xOOQO'#Db'#DbO.tQpO,59{OOQO'#EZ'#EZO.|Q`O,5:tO/[QWO,5:tO/fQWO,5:tO/kQWO,5:WO(QQWO,5:WOOQS'#Dn'#DnO0WQWO'#DsO0_Q!fO'#FPO0yQWO'#DtOOQS'#FQ'#FQO1OQWO,5:eO'bQWO'#DrOOQS'#Cu'#CuO(QQWO'#CwO1TQ!hO'#CyO2wQ!fO,5:gO3YQWO'#DZOOQS'#Ew'#EwO(QQWO'#DTOOQO'#EP'#EPO3_QWO,5:iO3dQWO,5:iOOQO'#ES'#ESO3lQWO,5:lO3qQ!fO,5:rOOQO-E8`-E8`O4SQWO,5;[O4_Q`O'#EiO.|Q`O,5:tOOQO,5:{,5:{O4pQWO'#EkO4SQWO,5;[OOQP1G.m1G.mOOQP'#Ce'#CeO5lQaO,5:}OOQP'#Di'#DiOOQO-E8a-E8aOOQO1G.h1G.hO(QQWO1G.hO6PQWO1G.hO6XQWO,59kO6^QeO1G.oO.oQ[O1G.oOOQP1G/d1G/dO7kQpO1G/gO8UQaO1G/jO9RQaO1G/lO:OQaO1G/mO:{Q!fO'#E}O;iQ!fO'#EwOOQO'#E}'#E}OOQO,5;h,5;hO=PQWO,5;hO=[Q!fO1G.hOOQO1G0f1G0fO=mQWO'#CnOOQP1G.o1G.oO=tQWO'#CqOOQP1G/g1G/gO(QQWO1G/gO={Q`O1G0`O/[QWO1G0`O>ZQWO1G0`O>`Q!fO1G0`O%kQWO'#E^O$RQWO'#E_O?PQWO'#E]OOQO1G0`1G0`O?aQWO1G/rO?fQ!fO1G/rO?wQ!fO'#DnO@]QWO,5:ZO@bQ!fO,5:_OOQO'#DS'#DSO'bQWO,5:]O@sQWO'#DwOOQS,5:b,5:bO@zQWO,5:dO'bQWO'#EgOARQWO,5;kO*kQWO,5:`OOQO1G0P1G0POAaQ!fO,5:^OA{Q!fO,59cOOQS,59e,59eO(QQWO,59lOOQS,59q,59qOB^QWO,59sOOQO1G0R1G0ROBeQ#tO,59uOBmQ!fO,59oOOQO1G0T1G0TOD^QWO1G0TODcQWO'#ETOOQO1G0W1G0WOOQO1G0^1G0^P$WQaO'#CbODqQWO1G0vOOQO,5;T,5;TOOQO-E8g-E8gOD|QWO,5;VOOQO,5;V,5;VOOQO-E8i-E8iO=[Q!fO7+$SOOQO7+$S7+$SO(QQWO7+$SOOQS1G/V1G/VOOQP7+$Z7+$ZOOQP7+%R7+%RO(QQWO7+%ROEZQ!fO'#EdOFkQWO,5;iO(QQWO,5;iOOQO,5;i,5;iO+wQpO'#EfOFxQWO1G1SOOQO1G1S1G1SOGTQaO'#EuOG_QWO,59YOGdQWO'#EvOGnQWO,59]OGsQ!fO7+%RO/[QWO7+%zOHUQWO7+%zOHZQ!fO7+%zOOQO7+%z7+%zOHzQ!fO'#EjO(QQWO'#EjOJbQWO7+%zOOQO,5:x,5:xOOQO,5:y,5:yOJuQaO,5:wOOQO,5:w,5:wOOQO7+%^7+%^OKVQWO7+%^O(QQWO1G/uOOQS1G/y1G/yOOQS1G/w1G/wOK[QWO,5:cOKaQ!fO1G0OOOQS1G0O1G0OOKrQ!fO,5;ROOQO-E8e-E8eOL^QaO1G/zOOQS1G.}1G.}OOQS1G/W1G/WOLeQ!fO1G/_OOQS1G/_1G/_OLvQWO1G/aOOQO7+%o7+%oOL{QYO'#CyO1OQWO'#EhOMTQWO,5:oOOQO,5:o,5:oP+`QWO,58|OOQO1G0q1G0qOOQO<<Gn<<GnO=[Q!fO<<GnOMcQ!fO<<HmOOQO-E8b-E8bOMtQWO1G1TOOQO,5;Q,5;QOOQO-E8d-E8dOOQO7+&n7+&nONRQWO,5;aOOQP1G.t1G.tO(QQWO'#EeONZQWO,5;bOOQT1G.w1G.wOOQP<<Hm<<HmONcQ!fO<<IfOOQO<<If<<IfO/[QWO<<IfO! SQWO<<IfO! gQ!fO,5;UOOQO-E8h-E8hOOQO1G0c1G0cO/kQWO<<HxO!!}QWO7+%aOOQS1G/}1G/}OOQS7+%j7+%jOOQS7+%f7+%fOOQS7+$y7+$yOOQS7+${7+${OOQO,5;S,5;SOOQO-E8f-E8fOOQO1G0Z1G0ZOOQOAN=YAN=YOOQPAN>XAN>XO!#UQWO,5;POOQO-E8c-E8cO!#`QWOAN?QOOQOAN?QAN?QO!#sQ!fOAN?QO!$dQWOAN>dOOQS<<H{<<H{OOQOG24lG24lO!$iQWOG24lOOQOG24OG24OOOQOLD*WLD*W",
  stateData: "!%Y~O#cOSROSSOS~OVXOYXO^TO_TOfdOgeOodOpWO|VO!RUO!aYO!nZO!p[O!r]O!u^O!{_O#gPO#hRO~O#`#dP~P]O^XX^!}X_XXcXXjXXp!}XrXX|XX!RXX!XXX!^XX!_XX#OXX#`XX#aXX#hXX#nXX#oXX#o!}X#v!}XqXX~O#giO~O^oO_oOclOjvOrnO|qO!RpO!XrO!_xO#asO#hkO#ntO#otO~O#OzO!^#SX#`#SXq#SX~P$WOd}O#g{O~O#g!OO~O#g!QO~O^!UO#g!SO#o!VO#v!VO^!]X_!]Xc!]Xj!]Xr!]X|!]X!R!]X!X!]X!^!]X!_!]X#O!]X#`!]X#a!]X#h!]X#n!]X#o!]Xq!]X~Oj!XOn!WO~Og!^Oj!ZOo!^Op!^Ox!`O!i!]O#g!YO~Or#sP~P'bOf!fOg!fOh!fOj!bOl!fOn!fOo!fOp!fOrnOx!gO!O!eO#g!aO#l!cO~On!iO!O!eO#g!hO~O#g!kO~O#`#dXq#dX~P]O^!UOp!pO#o!VO#v!VO~O^!UO#o!VO#v!VO~O^!UOjvO#o!VO#v!VO~O!^!sO#`#dXq#dX~OVXOYXO^TO_TOp!xO|VO!RUO#g!vO#hRO~OclOjvOrnO!_!{O~Oq#dP~P]Od#PO#g{O~Of!fOg#WOh!fOj!bOl!fOn!fOo!fOp!fOrnOx!gO!O!eO#g!aO#l!cO#r#XO~Oa#YO~P+wOrnO!_!{O#O#]O!^#Sa#`#Saq#Sa~OQ#^O^]a_]ac]aj]ar]a|]a!R]a!X]a!^]a!_]a#O]a#`]a#a]a#h]a#n]a#o]aq]aa]a~OQ#`O~Oz#aO!V#bO~O^#dOp!pO#o#eO#v#eO~O!R#gO#h#hO~P(QO^#dO~O!^#sP~P'bOg!^Oj!ZOo!^Op!^Ox!`O!i!]O~O#g#mO~P/rOQ#rOc#uOu#qO|#tO#m#pOr#sX!^#sXa#sX~Oj#wO~OrnO~OP#{OQmXumX|mX!^mX#mmX^mXamXcmXfmXgmXhmXjmXlmXnmXomXpmXrmXxmX!OmX#gmX#lmX#OmX#`mXzmXqmX~OQ#`Ou#|O|$OO!^$PO#m#pO~Oj$QO~O!^$SO~On$TO!O!eO~Or$UO~OQ#rOrnOu#qO|#tO#m#pO~O!^!sO#`#daq#da~O#g!SO^#]Xp#]X#o#]X#v#]X~O!^#_X#`#_Xq#_X~P]O^oO_oO|qO!RpO!XrO#asO#hkO#ntO#otO~Oc#Vaj#Var#Va!_#Vaa#Va~P4}OrnO!_$bO~Oq$cO~OQ#^O^]i_]ic]ij]ir]i|]i!R]i!X]i!^]i!_]i#O]i#`]i#a]i#h]i#n]i#o]iq]ia]i~Oz$eO!V$fO~O^oO_oO|qO!RpO#hkO~Oc!Wij!Wir!Wi!X!Wi!^!Wi!_!Wi#O!Wi#`!Wi#a!Wi#n!Wi#o!Wiq!Wia!Wi~P7sOc!Yij!Yir!Yi!X!Yi!^!Yi!_!Yi#O!Yi#`!Yi#a!Yi#n!Yi#o!Yiq!Yia!Yi~P7sOc!Zij!Zir!Zi!X!Zi!^!Zi!_!Zi#O!Zi#`!Zi#a!Zi#n!Zi#o!Ziq!Zia!Zi~P7sOQ#`O^$iOu#|O|$OO#m#pOa#qXc#qX!^#qX~P(QO#r$jOQ#kX^#kXa#kXc#kXf#kXg#kXh#kXj#kXl#kXn#kXo#kXp#kXr#kXu#kXx#kX|#kX!O#kX!^#kX#g#kX#l#kX#m#kX~Oa$mOc$kO!^$kO~OQ#`OrnOu#|O|$OO#m#pO~Oa#iP~P*kOa#jP~P(QO^$sOp!pO#o$tO#v$tO~O^$sO~OQ#`Oc$xOu#|O|$OO#O$vO#m#pO!^!|i#`!|iq!|i~P(QOjvO!^#PX#`#PXq#PX~P*kO!^%OO~OQ#`Oa%POu#|O|$OO#m#pO~OQ!bX^!dXa!bXu!bX|!bX#m!bX~O^%QO~OQ#rOa%ROu#qO|#tO#m#pO~Oa#sP~P'bOz%VO~P(QOc#uOr#sa!^#saa#sa~OQ#rOu#qO|#tO#m#pOc!far!fa!^!faa!fa~OQ#`Oa%ZOu#|O|$OO#m#pO~Oz%^O~P(QOn%_O!P%_O~OQ#`Ou#|O|$OO#m#pO!^wa^waawacwafwagwahwajwalwanwaowapwarwaxwa!Owa#gwa#lwa#Owa#`wazwaqwa~O!^%`O~Oq%dO!x%bO!y%bO#l%aO~O!^!sO#`#diq#di~O!^#_a#`#_aq#_a~P]OQ#`Ou#|O|$OO#m#pOa#WXc#WXf#WXg#WXh#WXj#WXl#WXn#WXo#WXp#WXr#WXx#WX!O#WX!^#WX#g#WX#l#WX~Oa#qac#qa!^#qa~P(QOa%nOc$kO!^$kO~OclOa#iX~P4}Oa%pO~Oc%qOa#jX~P(QOa%sO~OQ#`Ou#|Oz%tO|$OO#m#pO~O^%wO~OQ#`Oc$xOu#|O|$OO#O%vO#m#pO!^!|q#`!|qq!|q~P(QOQ#`Ou#|O|$OO#m#pOc#^Xf#^Xg#^Xh#^Xj#^Xl#^Xn#^Xo#^Xp#^Xr#^Xx#^X!O#^X!^#^X#O#^X#`#^X#g#^X#l#^Xq#^X~Oc$xO#O%vO!^!|q#`!|qq!|q~P(QOjvO!^#Pa#`#Paq#Pa~P4}On%|O~Oa&OO~OQ#`Ou#|Oz&PO|$OO#m#pO~OQ#rOu#qO|#tO#m#pOc#Zar#Za!^#Zaa#Za~Oa&QO~P4}OQ#`Ou#|Oz&RO|$OO#m#pO~Oa&SO~OP#{OrmX~Oq&VO!x%bO!y%bO#l%aO~OQ#`Ou#|Oz&XO|$OO#m#pO~Oa#qic#qi!^#qi~P(QOclOa#ia~Oc%qOa#ja~OQ#`Oc$xOu#|O|$OO#O&]O#m#pO!^!|y#`!|yq!|y~P(QOc$xO#O&]O!^!|y#`!|yq!|y~P(QOQ#`Ou#|O|$OO#m#pOc#^af#^ag#^ah#^aj#^al#^an#^ao#^ap#^ar#^ax#^a!O#^a!^#^a#O#^a#`#^a#g#^a#l#^aq#^a~Oa&`O~P(QOa#Xac#Xa~P(QOc$xO#O&aO!^!|!R#`!|!Rq!|!R~P(QOQ#`Oc$xOu#|O|$OO#O&aO#m#pO!^!|!R#`!|!Rq!|!R~P(QO!^&cO~Oc$xO#O&dO!^!|!Z#`!|!Zq!|!Z~P(QOf#cpg#l!P#hRSRu~",
  goto: "2}#vPPPPPP#wP$O$^P$O$l$OPP$uP${PP%RPPP%nP%nP&gPPPPP'd%nP(y%nP%nP%nP)gPP$OP*f$O*oP$OP$O$O*u$OPP#wP*}*}+Y*}*}*}*}P*}+]*}#wP#wP#wP+d#wP+g+jPP#wP+m+tP,R,_,_+m+m,e,p,{-c-i-o-u-{.V.iPPPP.s.y/QPP/n/q/tPPPP1e1wP1}2Z2pZ`Obn!s$]iXOblnrsu!s#^#i#w$]iQOblnrsu!s#^#i#w$]QjRQ!ukR${#hQ|TR#OoQ#_|R$d#OQ#_}v#}!d#V#[#f#l#z$R$`$g$r$u$w%U%]%h%i%u%y&^R$d#P!m!f[vx!U!X!b!g!{#V#`#b#d#f#t#|$O$b$f$h$i$k$p$s$u$x$y%Q%k%q%u%w%x%}&Y&[&^&b!l!f[vx!U!X!b!g!{#V#`#b#d#f#t#|$O$b$f$h$i$k$p$s$u$x$y%Q%k%q%u%w%x%}&Y&[&^&bT%b$U%cSwS$X!l!f[vx!U!X!b!g!{#V#`#b#d#f#t#|$O$b$f$h$i$k$p$s$u$x$y%Q%k%q%u%w%x%}&Y&[&^&bU!zmy%eQ#x!_Q$W!mS$a!|#[Q%g$`Q&T%bR&W%hY#q![!m#o#y%Ww#|!d#V#[#f#l#z$R$`$g$r$u$w%U%]%h%i%u%y&^!l!f[vx!U!X!b!g!{#V#`#b#d#f#t#|$O$b$f$h$i$k$p$s$u$x$y%Q%k%q%u%w%x%}&Y&[&^&bQ!i]R$T!jQ!PUQ#QpR$z#gQ!RVR#Rq]uS!w$X$n$|%Yc!^Z_!W!Z!`#q#r#u%|R#n!ZZ#s![!m#o#y%WR!j]R!l^R$V!lZfObn!s$]YcObn!s$]Q!TWR$Z!pQ#j!UQ$v#dQ%v$sR&]%wX#i!U#d$s%wSbOnS!nb$]R$]!sSmS$XS!ym%oR%o$nQ$h#VQ$p#`Y%j$h$p%k%}&YQ%k$iQ%}%QR&Y%qQ%r$pR&Z%rQ$l#ZR%m$lQ#v![R%X#vQ%c$UR&U%cQ!qcQ#c!TT$[!q#cQ$y#fQ%x$uW%z$y%x&[&bQ&[%uR&b&^Q!tgQ$Y!oT$_!t$YQhOR!}nZaObn!s$]YSObn!s$]Q!wlQ#SrQ#TsQ#UuQ$n#^Q$|#iR%Y#wR$o#^R$q#`Q!d[S#Vv$kQ#[xQ#f!UQ#l!XQ#z!bQ$R!gQ$`!{d$g#V#`$h$i$p%Q%k%q%}&YQ$r#bQ$u#d`$w#f$u$y%u%x&[&^&bQ%U#tQ%[#|Q%]$OQ%h$bQ%i$fQ%u$sQ%y$xR&^%wQySQ!reQ!|mQ$}#iQ%e$XR%{$|Q#ZvR%l$kQ!_ZQ#k!WQ%T#rR&_%|W![Z!W#r%|Q!m_Q#o!ZQ#y!`Q%S#qR%W#uSgOnQ!obQ$^!sR%f$]",
  nodeNames: "⚠ Unit ( Comment LineComment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName ) ArgList , PseudoClassName ArgList VariableName AtKeyword PropertyVariable ValueName ( ParenthesizedValue ColorLiteral NumberLiteral StringLiteral Escape Interpolation } { Block BinaryExpression BinOp LogicOp UnaryExpression UnaryQueryOp CallExpression ] SubscriptExpression [ CallLiteral CallTag ParenthesizedContent IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp InterpolatedSelector ; when ImportStatement import KeywordQuery FeatureQuery FeatureName BinaryQuery UnaryQuery ParenthesizedQuery SelectorQuery selector CallQuery ArgList SubscriptQuery MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports Declaration PropertyName Important Inclusion IdSelector ClassSelector Inclusion CallExpression",
  maxTerm: 130,
  nodeProps: [
    ["openedBy", 17,"(",33,"{"],
    ["closedBy", 26,")",34,"}"]
  ],
  propSources: [lessHighlighting],
  skippedNodes: [0,3,4],
  repeatNodeCount: 10,
  tokenData: "!2q~R!ZOX$tX^%l^p$tpq%lqr)Ors-xst/ltu6Zuv$tvw8^wx:Uxy;syz<Uz{<Z{|<t|}BQ}!OBc!O!PDo!P!QFY!Q![Jw![!]Kr!]!^Ln!^!_MP!_!`M{!`!aNl!a!b$t!b!c! m!c!}!&R!}#O!'y#O#P$t#P#Q!([#Q#R!(m#R#T$t#T#o!&R#o#p!)S#p#q!(m#q#r!)e#r#s!)v#s#y$t#y#z%l#z$f$t$f$g%l$g#BY$t#BY#BZ%l#BZ$IS$t$IS$I_%l$I_$I|$t$I|$JO%l$JO$JT$t$JT$JU%l$JU$KV$t$KV$KW%l$KW&FU$t&FU&FV%l&FV;'S$t;'S;=`!2k<%lO$t`$wSOy%Tz;'S%T;'S;=`%f<%lO%T`%YS!P`Oy%Tz;'S%T;'S;=`%f<%lO%T`%iP;=`<%l%T~%qh#c~OX%TX^']^p%Tpq']qy%Tz#y%T#y#z']#z$f%T$f$g']$g#BY%T#BY#BZ']#BZ$IS%T$IS$I_']$I_$I|%T$I|$JO']$JO$JT%T$JT$JU']$JU$KV%T$KV$KW']$KW&FU%T&FU&FV']&FV;'S%T;'S;=`%f<%lO%T~'dh#c~!P`OX%TX^']^p%Tpq']qy%Tz#y%T#y#z']#z$f%T$f$g']$g#BY%T#BY#BZ']#BZ$IS%T$IS$I_']$I_$I|%T$I|$JO']$JO$JT%T$JT$JU']$JU$KV%T$KV$KW']$KW&FU%T&FU&FV']&FV;'S%T;'S;=`%f<%lO%Tk)RUOy%Tz#]%T#]#^)e#^;'S%T;'S;=`%f<%lO%Tk)jU!P`Oy%Tz#a%T#a#b)|#b;'S%T;'S;=`%f<%lO%Tk*RU!P`Oy%Tz#d%T#d#e*e#e;'S%T;'S;=`%f<%lO%Tk*jU!P`Oy%Tz#c%T#c#d*|#d;'S%T;'S;=`%f<%lO%Tk+RU!P`Oy%Tz#f%T#f#g+e#g;'S%T;'S;=`%f<%lO%Tk+jU!P`Oy%Tz#h%T#h#i+|#i;'S%T;'S;=`%f<%lO%Tk,RU!P`Oy%Tz#T%T#T#U,e#U;'S%T;'S;=`%f<%lO%Tk,jU!P`Oy%Tz#b%T#b#c,|#c;'S%T;'S;=`%f<%lO%Tk-RU!P`Oy%Tz#h%T#h#i-e#i;'S%T;'S;=`%f<%lO%Tk-lS#OZ!P`Oy%Tz;'S%T;'S;=`%f<%lO%T~-{WOY-xZr-xrs.es#O-x#O#P.j#P;'S-x;'S;=`/f<%lO-x~.jOn~~.mRO;'S-x;'S;=`.v;=`O-x~.yXOY-xZr-xrs.es#O-x#O#P.j#P;'S-x;'S;=`/f;=`<%l-x<%lO-x~/iP;=`<%l-xo/qY!RROy%Tz!Q%T!Q![0a![!c%T!c!i0a!i#T%T#T#Z0a#Z;'S%T;'S;=`%f<%lO%Tm0fY!P`Oy%Tz!Q%T!Q![1U![!c%T!c!i1U!i#T%T#T#Z1U#Z;'S%T;'S;=`%f<%lO%Tm1ZY!P`Oy%Tz!Q%T!Q![1y![!c%T!c!i1y!i#T%T#T#Z1y#Z;'S%T;'S;=`%f<%lO%Tm2QYl]!P`Oy%Tz!Q%T!Q![2p![!c%T!c!i2p!i#T%T#T#Z2p#Z;'S%T;'S;=`%f<%lO%Tm2wYl]!P`Oy%Tz!Q%T!Q![3g![!c%T!c!i3g!i#T%T#T#Z3g#Z;'S%T;'S;=`%f<%lO%Tm3lY!P`Oy%Tz!Q%T!Q![4[![!c%T!c!i4[!i#T%T#T#Z4[#Z;'S%T;'S;=`%f<%lO%Tm4cYl]!P`Oy%Tz!Q%T!Q![5R![!c%T!c!i5R!i#T%T#T#Z5R#Z;'S%T;'S;=`%f<%lO%Tm5WY!P`Oy%Tz!Q%T!Q![5v![!c%T!c!i5v!i#T%T#T#Z5v#Z;'S%T;'S;=`%f<%lO%Tm5}Sl]!P`Oy%Tz;'S%T;'S;=`%f<%lO%Tm6^YOy%Tz!_%T!_!`6|!`!c%T!c!}7a!}#T%T#T#o7a#o;'S%T;'S;=`%f<%lO%Td7TS!VS!P`Oy%Tz;'S%T;'S;=`%f<%lO%Tm7h[h]!P`Oy%Tz}%T}!O7a!O!Q%T!Q![7a![!c%T!c!}7a!}#T%T#T#o7a#o;'S%T;'S;=`%f<%lO%Ta8c[YPOy%Tz}%T}!O9X!O!Q%T!Q![9X![!c%T!c!}9X!}#T%T#T#o9X#o;'S%T;'S;=`%f<%lO%Ta9`[YP!P`Oy%Tz}%T}!O9X!O!Q%T!Q![9X![!c%T!c!}9X!}#T%T#T#o9X#o;'S%T;'S;=`%f<%lO%T~:XWOY:UZw:Uwx.ex#O:U#O#P:q#P;'S:U;'S;=`;m<%lO:U~:tRO;'S:U;'S;=`:};=`O:U~;QXOY:UZw:Uwx.ex#O:U#O#P:q#P;'S:U;'S;=`;m;=`<%l:U<%lO:U~;pP;=`<%l:Uo;xSj_Oy%Tz;'S%T;'S;=`%f<%lO%T~<ZOa~m<bUVPuWOy%Tz!_%T!_!`6|!`;'S%T;'S;=`%f<%lO%To<{Y#oQuWOy%Tz!O%T!O!P=k!P!Q%T!Q![@p![#R%T#R#SAm#S;'S%T;'S;=`%f<%lO%Tm=pU!P`Oy%Tz!Q%T!Q![>S![;'S%T;'S;=`%f<%lO%Tm>ZY#l]!P`Oy%Tz!Q%T!Q![>S![!g%T!g!h>y!h#X%T#X#Y>y#Y;'S%T;'S;=`%f<%lO%Tm?OY!P`Oy%Tz{%T{|?n|}%T}!O?n!O!Q%T!Q![@V![;'S%T;'S;=`%f<%lO%Tm?sU!P`Oy%Tz!Q%T!Q![@V![;'S%T;'S;=`%f<%lO%Tm@^U#l]!P`Oy%Tz!Q%T!Q![@V![;'S%T;'S;=`%f<%lO%Tm@w[#l]!P`Oy%Tz!O%T!O!P>S!P!Q%T!Q![@p![!g%T!g!h>y!h#X%T#X#Y>y#Y;'S%T;'S;=`%f<%lO%TbAtS#vQ!P`Oy%Tz;'S%T;'S;=`%f<%lO%TkBVScZOy%Tz;'S%T;'S;=`%f<%lO%TmBhXuWOy%Tz}%T}!OCT!O!P=k!P!Q%T!Q![@p![;'S%T;'S;=`%f<%lO%TmCYW!P`Oy%Tz!c%T!c!}Cr!}#T%T#T#oCr#o;'S%T;'S;=`%f<%lO%TmCy[f]!P`Oy%Tz}%T}!OCr!O!Q%T!Q![Cr![!c%T!c!}Cr!}#T%T#T#oCr#o;'S%T;'S;=`%f<%lO%ToDtW#hROy%Tz!O%T!O!PE^!P!Q%T!Q![>S![;'S%T;'S;=`%f<%lO%TlEcU!P`Oy%Tz!O%T!O!PEu!P;'S%T;'S;=`%f<%lO%TlE|S#r[!P`Oy%Tz;'S%T;'S;=`%f<%lO%T~F_VuWOy%Tz{Ft{!P%T!P!QIl!Q;'S%T;'S;=`%f<%lO%T~FyU!P`OyFtyzG]z{Hd{;'SFt;'S;=`If<%lOFt~G`TOzG]z{Go{;'SG];'S;=`H^<%lOG]~GrVOzG]z{Go{!PG]!P!QHX!Q;'SG];'S;=`H^<%lOG]~H^OR~~HaP;=`<%lG]~HiW!P`OyFtyzG]z{Hd{!PFt!P!QIR!Q;'SFt;'S;=`If<%lOFt~IYS!P`R~Oy%Tz;'S%T;'S;=`%f<%lO%T~IiP;=`<%lFt~IsV!P`S~OYIlYZ%TZyIlyzJYz;'SIl;'S;=`Jq<%lOIl~J_SS~OYJYZ;'SJY;'S;=`Jk<%lOJY~JnP;=`<%lJY~JtP;=`<%lIlmJ|[#l]Oy%Tz!O%T!O!P>S!P!Q%T!Q![@p![!g%T!g!h>y!h#X%T#X#Y>y#Y;'S%T;'S;=`%f<%lO%TkKwU^ZOy%Tz![%T![!]LZ!];'S%T;'S;=`%f<%lO%TcLbS_R!P`Oy%Tz;'S%T;'S;=`%f<%lO%TkLsS!^ZOy%Tz;'S%T;'S;=`%f<%lO%ThMUUuWOy%Tz!_%T!_!`Mh!`;'S%T;'S;=`%f<%lO%ThMoS!P`uWOy%Tz;'S%T;'S;=`%f<%lO%TlNSW!VSuWOy%Tz!^%T!^!_Mh!_!`%T!`!aMh!a;'S%T;'S;=`%f<%lO%TjNsV!XQuWOy%Tz!_%T!_!`Mh!`!a! Y!a;'S%T;'S;=`%f<%lO%Tb! aS!XQ!P`Oy%Tz;'S%T;'S;=`%f<%lO%To! rYg]Oy%Tz!b%T!b!c!!b!c!}!#R!}#T%T#T#o!#R#o#p!$O#p;'S%T;'S;=`%f<%lO%Tm!!iWg]!P`Oy%Tz!c%T!c!}!#R!}#T%T#T#o!#R#o;'S%T;'S;=`%f<%lO%Tm!#Y[g]!P`Oy%Tz}%T}!O!#R!O!Q%T!Q![!#R![!c%T!c!}!#R!}#T%T#T#o!#R#o;'S%T;'S;=`%f<%lO%To!$TW!P`Oy%Tz!c%T!c!}!$m!}#T%T#T#o!$m#o;'S%T;'S;=`%f<%lO%To!$r^!P`Oy%Tz}%T}!O!$m!O!Q%T!Q![!$m![!c%T!c!}!$m!}#T%T#T#o!$m#o#q%T#q#r!%n#r;'S%T;'S;=`%f<%lO%To!%uSp_!P`Oy%Tz;'S%T;'S;=`%f<%lO%To!&W[#g_Oy%Tz}%T}!O!&|!O!Q%T!Q![!&|![!c%T!c!}!&|!}#T%T#T#o!&|#o;'S%T;'S;=`%f<%lO%To!'T[#g_!P`Oy%Tz}%T}!O!&|!O!Q%T!Q![!&|![!c%T!c!}!&|!}#T%T#T#o!&|#o;'S%T;'S;=`%f<%lO%Tk!(OS|ZOy%Tz;'S%T;'S;=`%f<%lO%Tm!(aSz]Oy%Tz;'S%T;'S;=`%f<%lO%Td!(pUOy%Tz!_%T!_!`6|!`;'S%T;'S;=`%f<%lO%To!)XSr_Oy%Tz;'S%T;'S;=`%f<%lO%Tk!)jSqZOy%Tz;'S%T;'S;=`%f<%lO%To!){Y#nQOr%Trs!*ksw%Twx!.wxy%Tz!_%T!_!`6|!`;'S%T;'S;=`%f<%lO%Tm!*pZ!P`OY!*kYZ%TZr!*krs!+csy!*kyz!+vz#O!*k#O#P!-j#P;'S!*k;'S;=`!.q<%lO!*km!+jSo]!P`Oy%Tz;'S%T;'S;=`%f<%lO%T]!+yWOY!+vZr!+vrs!,cs#O!+v#O#P!,h#P;'S!+v;'S;=`!-d<%lO!+v]!,hOo]]!,kRO;'S!+v;'S;=`!,t;=`O!+v]!,wXOY!+vZr!+vrs!,cs#O!+v#O#P!,h#P;'S!+v;'S;=`!-d;=`<%l!+v<%lO!+v]!-gP;=`<%l!+vm!-oU!P`Oy!*kyz!+vz;'S!*k;'S;=`!.R;=`<%l!+v<%lO!*km!.UXOY!+vZr!+vrs!,cs#O!+v#O#P!,h#P;'S!+v;'S;=`!-d;=`<%l!*k<%lO!+vm!.tP;=`<%l!*km!.|Z!P`OY!.wYZ%TZw!.wwx!+cxy!.wyz!/oz#O!.w#O#P!1^#P;'S!.w;'S;=`!2e<%lO!.w]!/rWOY!/oZw!/owx!,cx#O!/o#O#P!0[#P;'S!/o;'S;=`!1W<%lO!/o]!0_RO;'S!/o;'S;=`!0h;=`O!/o]!0kXOY!/oZw!/owx!,cx#O!/o#O#P!0[#P;'S!/o;'S;=`!1W;=`<%l!/o<%lO!/o]!1ZP;=`<%l!/om!1cU!P`Oy!.wyz!/oz;'S!.w;'S;=`!1u;=`<%l!/o<%lO!.wm!1xXOY!/oZw!/owx!,cx#O!/o#O#P!0[#P;'S!/o;'S;=`!1W;=`<%l!.w<%lO!/om!2hP;=`<%l!.w`!2nP;=`<%l$t",
  tokenizers: [descendant, unitToken, argList, 0, 1, 2, 3, 4],
  topRules: {"StyleSheet":[0,5]},
  specialized: [{term: 115, get: value => spec_identifier[value] || -1},{term: 23, get: value => spec_AtKeyword[value] || -1}],
  tokenPrec: 2298
});

/**
A language provider for Less style sheets.
*/
const lessLanguage = /*@__PURE__*/LRLanguage.define({
    name: "less",
    parser: /*@__PURE__*/parser.configure({
        props: [
            /*@__PURE__*/indentNodeProp.add({
                Declaration: /*@__PURE__*/continuedIndent()
            }),
            /*@__PURE__*/foldNodeProp.add({
                Block: foldInside
            })
        ]
    }),
    languageData: {
        commentTokens: { block: { open: "/*", close: "*/" }, line: "//" },
        indentOnInput: /^\s*\}$/,
        wordChars: "@-"
    }
});
/**
Property, variable, @-variable, and value keyword completion
source.
*/
const lessCompletionSource = /*@__PURE__*/defineCSSCompletionSource(node => node.name == "VariableName" || node.name == "AtKeyword");
/**
Language support for Less.
*/
function less() {
    return new LanguageSupport(lessLanguage, lessLanguage.data.of({ autocomplete: lessCompletionSource }));
}

export { less, lessCompletionSource, lessLanguage };
