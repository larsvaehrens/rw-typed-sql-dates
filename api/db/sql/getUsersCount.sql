-- @param {DateTime} $1:startDate
-- @param {DateTime} $2:endDate
SELECT
  "User"."createdAt" AS "createdAt",
  COUNT(*) AS "count"
FROM
  "User"
WHERE
  "User"."createdAt" >= $1
  AND "User"."createdAt" <= $2
GROUP BY
  "User"."createdAt"
ORDER BY
  "User"."createdAt" ASC;
