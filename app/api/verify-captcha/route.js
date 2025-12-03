export async function POST(req) {
  const body = await req.json();
  const token = body.token;

  const secretKey = "6Le4Nh8sAAAAAE8RZrPUXAcHGFblCn4nIpvVc_Gt";

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const captchaRes = await fetch(verifyURL, { method: "POST" });
  const data = await captchaRes.json();

  return Response.json({ success: data.success });
}
