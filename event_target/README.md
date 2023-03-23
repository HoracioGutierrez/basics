# EVENT TARGET

In this demo I try to explain what the target is. It's a really simple concept but usually students struggle to know why we use it so much at the beggining. In this example only one function will be used to handle the click event of every button in the screen. This one function will print the target in screen to let the user know what it really is : the HTML tag that triggered the event.

This can prove that the target is a dynamic variable that points to the DOM element that triggered the event in the first place so we really have to keep track of two things : 

  - how many elements did we assign the same function to
  - what is inner HTML of those elements, because most usually if they have tags inside them, those children tags will also trigger the same event

## DEMO 

<a href="https://codesandbox.io/s/spring-sunset-skbcnf?file=/src/index.js" target="_blank">Event Target</a>

## TRANSLATIONS

- Spanish: En esta demostración intento explicar cuál es el objetivo. Es un concepto muy simple, pero los estudiantes suelen tener dificultades para saber por qué lo usamos tanto al principio. En este ejemplo, solo se utilizará una función para manejar el evento de clic de cada botón en la pantalla. Esta función imprimirá el objetivo en la pantalla para que el usuario sepa lo que realmente es: la etiqueta HTML que desencadenó el evento.

Esto puede demostrar que el objetivo es una variable dinámica que apunta al elemento DOM que desencadenó el evento en primer lugar, por lo que realmente tenemos que hacer un seguimiento de dos cosas:

cuántos elementos asignamos a la misma función
cuál es el HTML interno de esos elementos, porque lo más común es que si tienen etiquetas dentro de ellos, esas etiquetas hijas también desencadenarán el mismo evento.

- French: Dans cette démonstration, j'essaie d'expliquer quel est l'objectif. C'est un concept très simple, mais les étudiants ont généralement du mal à comprendre pourquoi nous l'utilisons autant au début. Dans cet exemple, une seule fonction sera utilisée pour gérer l'événement de clic de chaque bouton à l'écran. Cette fonction affichera la cible à l'écran pour que l'utilisateur sache ce que c'est vraiment: la balise HTML qui a déclenché l'événement.

Cela peut prouver que la cible est une variable dynamique qui pointe vers l'élément DOM qui a déclenché l'événement en premier lieu, nous devons donc vraiment suivre deux choses:

combien d'éléments avons-nous assigné à la même fonction
quel est le HTML interne de ces éléments, car le plus souvent, s'ils ont des balises à l'intérieur d'eux, ces balises enfants déclencheront également le même événement.

- German: In diesem Demo-Versuch versuche ich zu erklären, was das Ziel ist. Es ist ein sehr einfaches Konzept, aber in der Regel haben Studenten Schwierigkeiten zu verstehen, warum wir es am Anfang so häufig verwenden. In diesem Beispiel wird nur eine Funktion verwendet, um das Klick-Ereignis jeder Schaltfläche auf dem Bildschirm zu verarbeiten. Diese eine Funktion wird das Ziel auf dem Bildschirm ausgeben, damit der Benutzer weiß, was es wirklich ist: das HTML-Tag, das das Ereignis ausgelöst hat.

Dies kann beweisen, dass das Ziel eine dynamische Variable ist, die auf das DOM-Element zeigt, das das Ereignis in erster Linie ausgelöst hat. Wir müssen also wirklich zwei Dinge im Auge behalten:

wie viele Elemente wir derselben Funktion zugewiesen haben
was der innere HTML-Code dieser Elemente ist, weil meistens, wenn sie Tags darin haben, diese Kind-Tags auch das gleiche Ereignis auslösen werden