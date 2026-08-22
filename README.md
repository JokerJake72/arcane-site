# Arcane SMP website — deploy & connect arcanesmp.com

## Before you push: edit two placeholders

Open `index.html` and search for:
- `https://discord.gg/EDIT-ME` — replace with your real Discord invite link.
- The **Staff** section — swap in real names/roles (search for "Owner Name", "Admin Name", etc.), and add or remove cards as needed.

## 1. Create the GitHub repo

1. Go to github.com → **New repository**.
2. Name it anything (e.g. `arcanesmp-site`). Public repo is fine (required for free GitHub Pages, unless you're on a paid plan).
3. Don't initialize with a README (you already have one).

## 2. Push these files

From this folder, run:

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Under **Custom domain**, enter `arcanesmp.com` and save. (This repo already includes a `CNAME` file with that domain, so GitHub should detect it automatically — entering it in the UI just confirms it.)

## 4. Point your domain at GitHub — DNS records

Log into wherever you bought `arcanesmp.com` (registrar or DNS provider) and open its DNS settings. Add these records:

**For the root domain (`arcanesmp.com`)** — add four **A** records, all with host `@`:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For `www.arcanesmp.com`** (optional but recommended, so www also works) — add one **CNAME** record:

| Type | Host | Value |
|------|------|-------|
| CNAME | www | YOUR-USERNAME.github.io |

Notes:
- If your registrar already has an A or CNAME record on `@` or `www`, delete/replace it rather than adding a duplicate — most providers only allow one record per host+type.
- DNS changes can take anywhere from a few minutes to ~24 hours to propagate.
- Common registrars: on **Namecheap** this is under Domain List → Manage → Advanced DNS; on **GoDaddy** it's Domain Settings → DNS Management; on **Cloudflare** it's the DNS tab (if you're using Cloudflare's proxy, set the A/CNAME records to "DNS only" / grey cloud at first so GitHub can verify the domain, then you can re-enable the orange-cloud proxy afterward).

## 5. Enforce HTTPS

Once DNS has propagated (GitHub will show a green checkmark next to the custom domain in Settings → Pages), check the **Enforce HTTPS** box in the same settings panel. GitHub issues a free SSL certificate automatically — this can take a few minutes to a few hours after DNS is verified.

## 6. Verify

Visit `https://arcanesmp.com` — you should see the live site.

---

### Updating the site later

Edit `index.html` locally, then:
```
git add .
git commit -m "Update site"
git push
```
GitHub Pages redeploys automatically within a minute or two.
