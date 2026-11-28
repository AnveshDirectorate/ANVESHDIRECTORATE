// netlify/functions/validate-code.js
// Server-side validation endpoint for secret ANVESH Solution Codes.
// Keeps unreleased creator crossover codes hidden from client-side DevTools inspection.

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed. Use POST." })
    };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || "{}");
  } catch (err) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON payload." })
    };
  }

  const submittedCode = String(body.code || "").trim().toUpperCase();

  // Optional secret code injected via Netlify Environment Variables (e.g. SECRET_CREATOR_CODE_04)
  const envSecretCode = process.env.ANVESH_LIVE_SECRET_CODE;
  if (envSecretCode && submittedCode === envSecretCode.toUpperCase()) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verified: true,
        code: submittedCode,
        status: "SERVER-VERIFIED LIVE EVENT CLEARANCE",
        linkedCaseId: "ANV-CLS-006",
        explanation: process.env.ANVESH_LIVE_SECRET_TEXT || "Server-authenticated live investigation record unlocked."
      })
    };
  }

  // Active public case code: File AV-165
  if (submittedCode === "AV-165-G-SHERU") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verified: true,
        code: submittedCode,
        linkedCaseId: "AV-165",
        status: "VERIFIED — FILE AV-165 ARCHIVE UNLOCKED (CATEGORY G)"
      })
    };
  }

  // Active public case code: File AV-164
  if (submittedCode === "AV-164-MV-GPT") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verified: true,
        code: submittedCode,
        linkedCaseId: "AV-164",
        status: "VERIFIED — FILE AV-164 OVERRIDE LOG UNLOCKED"
      })
    };
  }

  // Legacy archive codes are currently set to PRIVATE
  const privateCodes = ["ANV-SOL-001", "ANV-SOL-002", "ANV-SOL-003", "ALPHA-00"];
  if (privateCodes.includes(submittedCode)) {
    return {
      statusCode: 403,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        verified: false,
        error: "This case file is currently PRIVATE. Contact anveshdirectorate@proton.me for inquiries."
      })
    };
  }

  return {
    statusCode: 404,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      verified: false,
      error: "Unrecognized ANVESH Solution Code."
    })
  };
};
