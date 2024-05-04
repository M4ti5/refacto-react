# DevLog Refactoring

**Auteur  : Matis C.**

## Éléments refactorisés

- Fusion des composants DomainFilter.X -> DomainFilter : raison, aucune utilité de séparation.
- Correction des Composants react en ClassType -> Functional Component : raison, format de composant dépricié
- Amélioration en complexité temporelle et spatiale du composant DomainFilter.
- Changement de la cible de compilation : de ES5 à ES6.
- Correction de l'ancien ReactDOM.render().
- Nettoyage des dépendances non utilisées.
- Améliroations des tests unitaires

## Éléments à faire

- Correction des vurnérabilités des dependances (3 modérés , 6 hautes)
- Passer les composants de Redux au reducer natif de React 18 : le projet est déjà sur React 18.2, donc aucune migration n'est nécessaire.

### Éléments à considérer dans un cas réel

- Utiliser useMemo pour la récupération des domaines afin de ne pas surcharger inutilement le backend à chaque rendu.
- Faire un arboressance :  components, scenes et services.
- Faire des chemain relatifs pour allégé l'écritures des imports

Temps total : 53 min 22 sec

J'ai décidé de m'arrêter là car je préfère ne pas entamer le refactoring de Redux sachant que je manquerai de temps pour le faire et que cela pourrait rendre le code instable.
