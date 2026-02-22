const generateCertificate = (userName, courseName) => {
  const issuedAt = new Date().toISOString();
  return {
    certificateId: `CERT-${Date.now()}`,
    userName,
    courseName,
    issuedAt,
    message: `This certifies ${userName} has successfully completed ${courseName}.`
  };
};

module.exports = { generateCertificate };
