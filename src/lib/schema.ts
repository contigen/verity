import z from 'zod'

const signalSchema = z.object({
  percentage: z.number().min(0).max(100),
  note: z.string(),
})

const reputationSchema = z.object({
  tags: z.array(z.string()),
  trustScore: z.number().min(0).max(100),
  explanation: z.string(),
  signals: z.object({
    transactionDiversity: signalSchema,
    botLikelihood: signalSchema,
    timeActive: signalSchema,
    onchainFootprint: signalSchema,
  }),
  activityData: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
    })
  ),
  protocolDistributionAnalysis: z.string(),
})

const sybilSignalSchema = z.object({
  signalIndicators: z.array(
    z.object({
      riskTag: z.enum([`safe`, `caution`, `unsafe`]),
      label: z.string(),
    })
  ),
  verdict: z.object({
    riskLevel: z.enum([`Low`, `Medium`, `High`]),
    label: z.string(),
    riskSummary: z.string(),
    riskAssessment: z.array(z.string()),
  }),
})

export const combinedReputationSchema = reputationSchema.extend({
  sybilSignals: sybilSignalSchema,
})

export const compareWalletSchema = z.array(
  z.object({
    wallet: z.string(),
    trustScore: z.number().min(0).max(100),
    similarity: z.number().min(0).max(100),
    riskLevel: z.enum([`Low`, `Medium`, `High`]),
    clusterMatch: z.boolean(),
  })
)

export const endorsementSuggestionSchema = z.array(z.string())
