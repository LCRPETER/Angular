import * as os from 'os';
import * as fs from 'fs';

// 2. Un programme qui affiche sur l'écran votre nom et prénom, en utilisant l'opération de concaténation.

const firstName = 'Votre';
const lastName = 'Nom_Prenom';
console.log(firstName + ' ' + lastName);

// 4. Déclaration d'une variable pour la mémoire en kB, une pour la mémoire en MB (nombres entièrs, 1KB = 1024B, 1MB = 1024KB), une pour le répertoire de base et une avec l'endianité du processeur ***. Ajout des variables dans un string, avec des espaces entre eux. Affichage du string sur l'écran.

const baseMemory = os.totalmem();
const baseMemoryMB = baseMemory / 1024 / 1024;
const homeDirectory = os.homedir();
const endianness = os.endianness();
const resultString = `Memory: ${baseMemory} kB ${baseMemoryMB} MB, Directory: ${homeDirectory}, Endianness: ${endianness}`;
console.log(resultString);

// 5. Le fichier os.info avec toutes les informations de l'exercice précédent. (fs.writeFileSync)

fs.writeFileSync('os.info', resultString);

// 6. Création d'un projet qui s'appelle boucles. En utilisant la boucle for pour afficher :

// a. Tous les nombres impairs dans l'intervalle 2000-2030

for (let i = 2001; i <= 2030; i += 2) {
  console.log(i);
}

// b. Les mêmes nombres en ordre inverse (utilisez boucle for of)

const oddNumbers = Array.from({ length: 16 }, (_, i) => 2030 - i).filter(
  (num) => num % 2 !== 0
);
for (const num of oddNumbers) {
  console.log(num);
}

// c. Tous les nombres divisibles par 3 (utilisez boucle while)

let i = 1;
while (i <= 2030) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

// d. Tous les nombres divisibles par 5 et 7

for (let i = 2000; i <= 2030; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    console.log(i);
  }
}

// e. Tous les nombres divisibles par 11 ou 6

for (let i = 2000; i <= 2030; i++) {
  if (i % 11 === 0 || i % 6 === 0) {
    console.log(i);
  }
}

//7. Stockage d'un nombre N quelconque dans une variable. En utilisant la boucle while pour compter seulement ses diviseurs impairs. Affichage sur l’écran :

const N = 42;
let count = 0;
let isPrime = true;

let divisor = 1;
while (divisor <= N) {
  if (N % divisor === 0) {
    count++;
    if (divisor % 2 === 0) {
      isPrime = false;
    }
  }
  divisor++;
}

// a. “Le nombre N à y diviseurs”, où y le numéro de ses diviseurs

console.log(`Le nombre ${N} a ${count} diviseurs.`);

// b. Si le nombre est premier.

if (isPrime) {
  console.log('Le nombre est premier.');
}

// PARTIE2

// Création d'un programme et exécution avec 5 paramètres de type number. Sauvegarde de la liste des paramètres dans une variable. Affichage :

const params = process.argv.slice(5).map(Number);

// a. La liste des paramètres avec console.log

console.log('Liste des paramètres:', params);

// b. Le nombre de paramètres

console.log('Nombre de paramètres:', params.length);

// Affichage des paramètres avec une boucle for

for (const param of params) {
  console.log('Paramètre:', param);
}

// 2 -Création d'une fonction pour calculer le nombre de combinaisons.

function comb(a: number, b: number): number {
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
  return factorial(a) / (factorial(b) * factorial(a - b));
}

const result = comb(5, 2);
console.log('Résultat:', result);
// Stocke le résultat dans une variable et l'affiche
const storedResult = comb(4, 2);
console.log('Résultat stocké:', storedResult);

// 3 -Création d'un nouveau type de données avec des interfaces pour les employés.

interface Employee {
  nom: string;
  prénom: string;
  département: string;
  expérience: number;
}

// a. Création un objet de type Employe

const employee: Employee = {
  nom: 'Nom',
  prénom: 'Prénom',
  département: 'Département',
  expérience: 3,
};

// b. Affichage chaque attribut de l'objet

console.log('Nom:', employee.nom);
console.log('Prénom:', employee.prénom);
console.log('Département:', employee.département);
console.log('Expérience:', employee.expérience);

// c. Création un tableau avec 3 objets de type Employe

const employees: Employee[] = [
  { nom: 'Doe', prénom: 'John', département: 'HR', expérience: 5 },
  { nom: 'Smith', prénom: 'Jane', département: 'IT', expérience: 8 },
  { nom: 'Johnson', prénom: 'Bob', département: 'Finance', expérience: 7 },
];

// d. Affichage l'étudiant avec la plus grande expérience

const maxExperienceEmployee = employees.reduce((max, emp) =>
  emp.expérience > max.expérience ? emp : max
);
console.log('Employé avec la plus grande expérience:', maxExperienceEmployee);

// e. Affichage la personne avec le prénom le plus longue

const longestFirstNameEmployee = employees.reduce((max, emp) =>
  emp.prénom.length > max.prénom.length ? emp : max
);
console.log('Personne avec le prénom le plus long:', longestFirstNameEmployee);

// f. Affichage tous les objets en ordre alphabétique selon le nom de famille
const sortedEmployees = [...employees].sort((a, b) =>
  a.nom.localeCompare(b.nom)
);
console.log('Employés en ordre alphabétique:', sortedEmployees);

// 4-  Créatioin une classe Employee avec une sous-classe Manager.

// Interface pour définir la structure d'un employé
interface Employee {
  nom: string;
  prénom: string;
  département: string;
  expérience: number;
}

// Classe Employee
class EmployeeClass implements Employee {
  constructor(
    public nom: string,
    public prénom: string,
    public département: string,
    public expérience: number
  ) {}
}

// a. Création une sous-classe Manager, dérivée de la classe Employe, qui contient un champ supplémentaire noSubordonnés (number) Sous-classe Manager

class Manager extends EmployeeClass {
  constructor(
    nom: string,
    prénom: string,
    département: string,
    expérience: number,
    public noSubordonnés: number
  ) {
    super(nom, prénom, département, expérience);
  }
}

// b. Création un objet de type Manager

const manager: Manager = new Manager('Smith', 'Jane', 'IT', 8, 20);

// c. Créez une fonction qui reçoit comme paramètre un objet de type Manager et qui vérifie si objet.noSubordonnés est supérieur à 15 ou non

function vérifierSubordonnés(manager: Manager): void {
  if (manager.noSubordonnés > 15) {
    console.log('Nombre de subordonnés supérieur à 15.');
  } else {
    console.log('Nombre de subordonnés inférieur ou égal à 15.');
  }
}

// Appel de la fonction
vérifierSubordonnés(manager);
