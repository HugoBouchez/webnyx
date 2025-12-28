# 🔧 Guide de Dépannage

## Le site ne fonctionne pas ?

### 1. Vérifier que Node.js est installé

Ouvrez un terminal et tapez :
```bash
node --version
npm --version
```

Vous devez avoir Node.js 18+ installé.

### 2. Nettoyer et réinstaller

Si le site ne démarre pas, essayez :

**Windows :**
- Double-cliquez sur `redemarrer-site.bat` (nettoie le cache et redémarre)

**Manuellement :**
```bash
# Supprimer le cache
rm -rf .next
rm -rf node_modules

# Réinstaller
npm install

# Relancer
npm run dev
```

### 3. Vérifier les erreurs dans le terminal

Lorsque vous lancez `npm run dev`, regardez les erreurs affichées dans le terminal.

### 4. Vérifier le port

Si le port 3000 est occupé, Next.js utilisera automatiquement 3001, 3002, etc.
Vérifiez le message dans le terminal pour voir l'URL exacte.

### 5. Problèmes courants

#### Erreur : "Module not found"
```bash
npm install
```

#### Erreur : "Port already in use"
Fermez les autres instances de Node.js ou changez le port :
```bash
npm run dev -- -p 3001
```

#### Erreur : "Cannot find module"
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### 6. Vérifier les fichiers essentiels

Assurez-vous que ces fichiers existent :
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `tailwind.config.ts`
- ✅ `tsconfig.json`
- ✅ `app/layout.tsx`
- ✅ `app/page.tsx`

### 7. Tester le build

Pour vérifier s'il y a des erreurs de compilation :
```bash
npm run build
```

### 8. Support

Si le problème persiste :
1. Vérifiez les erreurs dans le terminal
2. Vérifiez la console du navigateur (F12)
3. Consultez la documentation Next.js : https://nextjs.org/docs

