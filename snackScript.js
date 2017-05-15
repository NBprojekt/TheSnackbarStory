
    /**
      *     Ein Script das eine Snackbar beim laden 
      *     aufruft und diese wieder schließt. 
      */
     
    // Globale variable die dich sowas von garnichts angeht ! 
    var geheim = 1;
        // Beim laden der Seite wird diese Funktion gestartet
    window.onload = function snack() { 
        // Starten der Geschichte
        setTimeout("snackbarEinblenden()", 2000);
        // Don't mind me 
        setTimeout("hinweisAusgabe()", 600000);
        // me 2 
        setInterval('soVielZeitHabeIchSchonVerschwendet()', 1000);
        
    };
    // Anzeige wie viel Zeit man schon auf dieser Seite verschwentet hat :)
    function soVielZeitHabeIchSchonVerschwendet(){
            // Auslesen der Zahlen aus der Webseite
        // Sekunden
        var sekundenDiv = document.getElementById('sek');
        var sekundenTxt = sekundenDiv.textContent;
        var sekundenNum = Number(sekundenTxt);
        // Minuten
        var minutenDiv = document.getElementById('min');
        var minutenTxt = minutenDiv.textContent;
        var minutenNum = Number(minutenTxt);
        
        // Wenn die Sekunden unter 60sind werden diese um eine erhöht
        if (sekundenNum < 59)  document.getElementById('sek').innerHTML = sekundenNum + 1;
        
        // Wenn nicht dann werden die Minuten um 1 erhöht 
        // und die Sekunden auf 0 zurückgesetzt
        else {
            document.getElementById('sek').innerHTML = 0;
            document.getElementById('min').innerHTML = ++minutenNum;
        }
    }
    function hinweisAusgabe(){
        // Das Hinweis div wird wieder sichtbar gemacht
        var hinweis = document.getElementById ( "hinweis" ) ; 
        hinweis.style.visibility = "visible" ;
    }
    // Das einblenden der Snackbar
    function snackbarEinblenden() { 
        setTimeout("snackbarAusblenden()", 7000); 
        // Die ID des Divs in dem Die geschichte steht
        var welchesDiv = document.getElementById("dieGeschichte");
        
        // An das Div wird die 'punktShow' Klasse hinzugefügt
        welchesDiv.className = "punktShow";
    }
    // Das ausblenden der Snackbar
    function snackbarAusblenden () { 
         setTimeout("geschichtsTextAendern()", 1000);
        // Die ID des Divs in dem Die geschichte steht
        var welchesDiv = document.getElementById("dieGeschichte");
        
        // Von dem Div wird die 'punktShow' Klasse wieder entfernt
         welchesDiv.className = welchesDiv.className.replace("punktShow", ""); 
    }
    // Welcher Text steht in der Snackbar
    function geschichtsTextAendern (){
        if (geheim < 90)
        setTimeout("snackbarEinblenden()", 1000);
        geheim++;
        // Deklaration der Text varible
        var text = "";
        
        // Initialisieren des Textes
        switch (geheim){ 
            case 1:
                text = "Unsere heutige Geschichte lautet: ";
                break;
            case 2:
                text = "„Schneewittchen und die sieben Zwerge“";
                break;
            case 3:
                text = "An einem Wintertag sitzt eine Königin am Fenster,";
                break;
            case 4:
                text = "das einen schwarzen Rahmen aus Ebenholz hat, und näht.";
                break;
            case 5:
                text = "Versehentlich sticht sie sich mit ";
                break;
            case 6:
                text = "der Nähnadel in den Finger.";
                break;
            case 7:
                text = "Als sie drei Blutstropfen in den ";
                break;
            case 8:
                text = "Schnee fallen sieht, denkt sie:";
                break;
            case 9:
                text = "„Hätt’ ich ein Kind, so weiß wie Schnee,";
                break;
            case 10:
                text = "so rot wie Blut und so schwarz ";
                break;
            case 11:
                text = "wie das Holz an dem Rahmen.“";
                break;
            case 12:
                text = "Ihr Wunsch erfüllt sich, und sie bekommt eine";
                break;
            case 13:
                text = "Tochter, die Schneewittchen genannt wird,";
                break;
            case 14:
                text = "weil sie helle Haut, rote Wangen und schwarze Haare hat.";
                break;
            case 15:
                text = "Nach der Geburt stirbt die Königin, und der König ";
                break;
            case 16:
                text = "nimmt sich eine neue Gemahlin. ";
                break;
            case 17:
                text = "Diese ist sehr schön, aber eitel und böse. ";
                break;
            case 18:
                text = "Sie kann es nicht ertragen,";
                break;
            case 19:
                text = "an Schönheit übertroffen zu werden.";
                break;
            case 20:
                text = "Als Schneewittchen sieben Jahre alt ist, nennt der ";
                break;
            case 21:
                text = "sprechende und allwissende Spiegel der bösen Königin ";
                break;
            case 22:
                text = "Schneewittchen und nicht sie die Schönste im ganzen Land.";
                break;
            case 23:
                text = "Von Neid geplagt, beauftragt die Stiefmutter einen Jäger, ";
                break;
            case 24:
                text = "das Kind im Wald umzubringen und ihr zum Beweis ";
                break;
            case 25:
                text = "dessen Lunge und Leber zu bringen.";
                break;
            case 26:
                text = "Doch der Mann lässt das flehende Mädchen laufen und";
                break;
            case 27:
                text = " bringt der Königin Lunge und Leber eines Frischlings, die diese ";
                break;
            case 28:
                text = "im Glauben, es seien Schneewittchens, kochen lässt und verspeist.";
                break;
            case 29:
                text = "Schneewittchen flüchtet in den Wald. ";
                break;
            case 30:
                text = "Es kommt zu einem Häuschen, in dem ein Tisch ";
                break;
            case 31:
                text = "für sieben Personen gedeckt ist, ";
                break;
            case 32:
                text = "und nimmt sich von jedem Platz ";
                break;
            case 33:
                text = "ein wenig zu essen und zu trinken.";
                break;
            case 34:
                text = "Dann probiert es die Betten aus, bis es ";
                break;
            case 35:
                text = "ein passendes gefunden hat, und schläft ein.";
                break;
            case 36:
                text = "Als es dunkel ist, kommen die Hausbewohner, sieben Zwerge, ";
                break;
            case 37:
                text = "die in den Bergen nach Erz gegraben haben, heim.";
                break;
            case 38:
                text = "Sie bemerken erstaunt, dass jemand ihre Sachen angerührt hat.";
                break; 
            case 39:
                text = "Im Bett des siebten Zwerges finden sie";
                break;
            case 40:
                text = "das schlafende Kind und sind hingerissen von dessen Schönheit.";
                break; 
            case 41:
                text = "Am nächsten Morgen erklärt Schneewittchen ihnen seine Lage, ";
                break;
            case 42:
                text = "und es darf im Haus wohnen bleiben, wenn es die Hausarbeiten verrichtet. ";
                break;
            case 43:
                text = "Schneewittchen willigt ein und ist nun tagsüber immer alleine, ";
                break;
            case 44:
                text = "weswegen die Zwerge das Mädchen vor der Stiefmutter warnen";
                break;
            case 45:
                text = "und es ermahnen, niemanden hereinzulassen.";
                break;
            case 46:
                text = "Währenddessen befragt die böse Königin ihren Spiegel ";
                break;
            case 47:
                text = "ein weiteres Mal nach der schönsten Frau im Königreich.";
                break;
            case 48:
                text = "Er verrät ihr, dass Schneewittchen noch am Leben ist und";
                break;
            case 49:
                text = "sich hinter den sieben Bergen im Haus der sieben Zwerge versteckt.";
                break;
            case 50:
                text = "Dreimal verkleidet sich nun die Königin als Händlerin ";
                break;
            case 51:
                text = "und bietet dem Mädchen unerkannt Waren an,";
                break;
            case 52:
                text = " mittels derer sie ihm das Leben nehmen will:  ";
                break;
            case 53:
                text = "Einen Schnürriemen zurrt sie so eng, ";
                break;
            case 54:
                text = "dass Schneewittchen zu ersticken droht,";
                break;
            case 55:
                text = "einen Haarkamm und schließlich ";
                break;
            case 56:
                text = "die rote Hälfte eines Apfels präpariert sie mit Gift.";
                break;
            case 57:
                text = "Jedes Mal lässt sich Schneewittchen täuschen und von den schönen Dingen ";
                break;
            case 58:
                text = "betören, sodass es sie annimmt und wie tot hinfällt.";
                break;
            case 59:
                text = "Die ersten beiden Male können die Zwerge ";
                break;
            case 60:
                text = "Schneewittchen ins Leben zurückholen,";
                break;
            case 61:
                text = "indem sie Riemen und Kamm entfernen. ";
                break;
            case 62:
                text = "Beim dritten Mal finden sie die Ursache nicht";
                break;
            case 63:
                text = "und halten das Mädchen für tot.";
                break;
            case 64:
                text = "Weil es so schön ist, legen sie es in einen gläsernen, ";
                break;
            case 65:
                text = "mit Schneewittchens Namen und Titel beschrifteten Sarg, ";
                break; 
            case 66:
                text = "in dem es aussieht, als schliefe es nur. ";
                break;
            case 67:
                text = "Sie stellen den Sarg auf einen Berg, ";
                break;
            case 68:
                text = "wo auch die Tiere des Waldes das Mädchen betrauern und es immer ";
                break;
            case 69:
                text = "von einem der Zwerge bewacht wird. ";
                break;
            case 70:
                text = "Die böse Königin erhält von ihrem Spiegel die Auskunft, ";
                break;
            case 71:
                text = "dass nun sie „die Schönste“ sei.";
                break;
            case 72:
                text = "Schneewittchen liegt sehr lange Zeit in dem Sarg";
                break;
            case 73:
                text = "und bleibt schön wie eh und je.";
                break;
            case 74:
                text = "Eines Tages reitet ein Königssohn vorüber und verliebt sich ";
                break;
            case 75:
                text = "in die scheinbar tote Prinzessin. ";
                break;
            case 76:
                text = "Er bittet die Zwerge, ihm den Sarg mit der schönen Königstochter ";
                break;
            case 77:
                text = "zu überlassen, sda er nicht mehr ohne ihren Anblick leben könne.";
                break;
            case 78:
                text = "Aus Mitleid geben die Zwerge ihm schweren Herzens Schneewittchen. ";
                break;
            case 79:
                text = "Doch als der Sarg auf sein Schloss getragen wird, ";
                break;
            case 80:
                text = "stolpert einer der Diener, und der Sarg fällt zu Boden. ";
                break;
            case 81:
                text = "Durch den Aufprall rutscht das giftige Apfelstück aus Schneewittchens Hals. ";
                break;
            case 82:
                text = "Sie erwacht, und der Prinz und Schneewittchen halten Hochzeit,";
                break;
            case 83:
                text = "zu der auch die böse Königin eingeladen wird. ";
                break;
            case 84:
                text = "Voller Neugier, wer denn die junge Königin sei, ";
                break;
            case 85:
                text = "von deren Schönheit ihr der Spiegel berichtet hat, ";
                break;
            case 86:
                text = "erscheint sie, erkennt Schneewittchen und muss zur Strafe für ihre Taten";
                break;
            case 87:
                text = "in rotglühenden Eisenpantoffeln solange tanzen, bis sie tot zusammenbricht.";
                break;
            case 88:
                text = "<strong id='ende'>Und Wenn sie nicht gestorben sind,</strong>"; 
                break;
            case 89:
                text = "<strong id='ende'>dann vögeln sie noch heute. </strong>";
                break;
            case 90:
                text = "<strong id='ende'> THE END <strong>";
        }
        // Ersetzen des Textes
        document.getElementById('geschichtsText').innerHTML = text;
    }