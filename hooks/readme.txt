Instructions pour l'utilisation du hook pre-commit

1. Description :
   Ce hook Git pre-commit génère un fichier suivi/commitInfo.txt contenant la date et l'heure du commit si l'utilisateur répond 'y' à la question posée lors du commit.

2. Installation :
   - Copiez le fichier hooks/pre-commit dans le répertoire .git/hooks/ de votre dépôt :
     ```
     cp hooks/pre-commit .git/hooks/pre-commit
     ```
   - Rendez le fichier exécutable (important !) :
     ```
     chmod +x .git/hooks/pre-commit
     ```
   - Vérifiez les permissions pour confirmer que le fichier est exécutable :
     ```
     ls -l .git/hooks/pre-commit
     ```
     Les permissions doivent ressembler à : -rwxr-xr-x (les 'x' indiquent que le fichier est exécutable).

3. Utilisation :
   - Lors d'un commit (git commit), une question s'affiche : "Générer le fichier commitInfo.txt pour ce commit (y/[n]) ?"
   - Répondez 'y' pour créer et ajouter suivi/commitInfo.txt avec le texte "commit vérifié le <date et heure>".
   - Répondez 'n' ou appuyez sur Entrée pour ignorer.

4. Vérification :
   - Après un commit avec 'y', vérifiez le contenu de suivi/commitInfo.txt :
     ```
     cat suivi/commitInfo.txt
     ```
   - Exemple de contenu : "commit vérifié le 2025-04-30 14:30:45"

5. Remarques :
   - Assurez-vous que le répertoire 'suivi' existe dans votre dépôt.
   - Le hook ne modifie pas les autres fichiers du commit.
   - Si le hook ne s'exécute pas, vérifiez à nouveau les permissions avec `ls -l .git/hooks/pre-commit` et assurez-vous qu'il est exécutable.