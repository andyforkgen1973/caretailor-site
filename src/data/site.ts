// Site-wide settings. Edit links and the mailing list here.

export const site = {
  // Where the "SIGN UP" button goes
  signupUrl: 'https://app.caretailor.co.uk/register/',

  // Mailchimp audience the mailing-list forms subscribe people to.
  // Found in Mailchimp under Audience > Signup forms > Embedded forms.
  mailchimp: {
    action: 'https://caretailor.us5.list-manage.com/subscribe/post',
    u: 'b9365bff18340e9baf86951ed',
    id: 'e67a7d1919',
    f_id: '002f7be0f0',
    // Merge field that stores "I'm a carer / looking for care"
    roleField: 'MMERGE7',
  },

  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581361741084', icon: '/images/facebook.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/caretailor/', icon: '/images/instagram.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/care-tailor/', icon: '/images/linkedin.svg' },
  ],
};
