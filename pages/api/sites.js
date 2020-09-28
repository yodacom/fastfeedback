import db from '@lib/firebase-admin';

export default (_, res) => {
  const sitesRef = db.collection('sites');
  const getDoc = siteRef
    .get()
    .then((doc) => {
    if (!doc.exists) {
      console.log('no such document');
    }

    res.status(200).json(doc.data());
  })
    .catch((err { console.log('Error getting document', err);}))
});

res.status(200).json({ name: 'Next.js' });
};
