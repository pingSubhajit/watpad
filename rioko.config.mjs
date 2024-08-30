const config = {
	featureSet: [
		{
			id: 'FEAT_WT102_ENDLESS_MODE',
			name: 'Feature 1',
			description: 'This is the first feature',
			level: 1,
		}
	],
	levelingFunction: (user, incrementLevel, decrementLevel) => {
		if (user.meta?.practiced >= 5 && user.currentLevel === 0) {
			incrementLevel()
		}
	}
}

export default config
