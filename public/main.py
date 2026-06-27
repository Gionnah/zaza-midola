import os
import glob

# Définir le dossier contenant les images
dossier = "."  # Remplace par le chemin de ton dossier

# Extensions d'images à prendre en compte
extensions = ["*.jpg", "*.jpeg", "*.png", "*.gif", "*.bmp", "*.tiff", "*.jfif"]

# Récupérer tous les fichiers images
images = []
for ext in extensions:
    images.extend(glob.glob(os.path.join(dossier, ext)))

# Trier les images pour un ordre cohérent
images.sort()

# Renommer les fichiers
for i, chemin_image in enumerate(images, start=1):
    # Obtenir l'extension du fichier
    extension = os.path.splitext(chemin_image)[1]
    
    # Créer le nouveau nom
    nouveau_nom = f"gallery-{i}{extension}"
    nouveau_chemin = os.path.join(dossier, nouveau_nom)
    
    # Renommer le fichier
    os.rename(chemin_image, nouveau_chemin)
    print(f"Renommé : {os.path.basename(chemin_image)} -> {nouveau_nom}")

print(f"\n✅ {len(images)} images renommées avec succès !")