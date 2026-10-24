// ==========================================
// 1. FONCTIONS DE MANIPULATION DE CHAÎNES
// ==========================================

/**
 * Inverse une chaîne de caractères donnée.
 * Exemple: "hello" -> "olleh"
 */
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

/**
 * Compte le nombre de caractères dans une chaîne.
 */
function compterCaracteres(str) {
  return str.length;
}

/**
 * Met en majuscule la première lettre de chaque mot d’une phrase.
 * Exemple: "bonjour tout le monde" -> "Bonjour Tout Le Monde"
 */
function mettreMotsEnMajuscules(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}


// ==========================================
// 2. FONCTIONS SUR LES TABLEAUX
// ==========================================

/**
 * Trouve la valeur maximale dans un tableau de nombres.
 */
function trouverMaximum(tableau) {
  if (tableau.length === 0) return null;
  return Math.max(...tableau);
}

/**
 * Trouve la valeur minimale dans un tableau de nombres.
 */
function trouverMinimum(tableau) {
  if (tableau.length === 0) return null;
  return Math.min(...tableau);
}

/**
 * Calcule la somme de tous les éléments d’un tableau.
 */
function calculerSommeTableau(tableau) {
  return tableau.reduce((somme, valeur) => somme + valeur, 0);
}

/**
 * Filtre les éléments d’un tableau en fonction d’une condition donnée.
 * Exemple d'usage: filtrerTableau([1, 2, 3], x => x > 1) -> [2, 3]
 */
function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}


// ==========================================
// 3. FONCTIONS MATHÉMATIQUES
// ==========================================

/**
 * Calcule la factorielle d’un nombre donné (n!).
 * Exemple: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */
function calculerFactorielle(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

/**
 * Vérifie si un nombre est premier.
 * Renvoie true si premier, false sinon.
 */
function estNombrePremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Génère la suite de Fibonacci jusqu’à un nombre donné de termes.
 * Exemple: 5 termes -> [0, 1, 1, 2, 3]
 */
function genererFibonacci(termes) {
  if (termes <= 0) return [];
  if (termes === 1) return;
  
  const suite =;
  while (suite.length < termes) {
    const suivant = suite[suite.length - 1] + suite[suite.length - 2];
    suite.push(suivant);
  }
  return suite;
}
